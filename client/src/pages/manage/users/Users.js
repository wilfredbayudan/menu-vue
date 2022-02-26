import FloatedContent from "../../../styles/FloatedContent";
import PageTitle from "../../../styles/PageTitle";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SelectBusiness from "./SelectBusiness";
import ErrorList from "../../../components/ErrorList";
import UsersList from "./UsersList";
import AddUser from "./AddUser";

const Notice = styled.p`
`;

const Users = ({ appState }) => {

  const [ searchParams ] = useSearchParams();
  const businessId = searchParams.get("businessId");

  const { user } = appState;

  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [businessUsers, setBusinessUsers] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isOwner, setIsOwner] = useState(false);

  const ownedBusinesses = user.businesses.filter(business => business.owner);

  useEffect(() => {
    if (!businessId) return;
    if (ownedBusinesses.map(ownedBusiness => ownedBusiness.business_id).includes(parseInt(businessId))) {
      setSelectedBusiness(businessId);
    }
  }, [businessId, ownedBusinesses])

  useEffect(() => {
    if (!selectedBusiness || businessUsers.length > 0) return;
    fetch(`/businesses/${businessId}/users`)
      .then(res => {
        if (res.ok) {
          res.json().then(json => {
            setBusinessUsers(json);
            if (json.find(businessUser => businessUser.id === user.id).owner) {
              setIsOwner(true);
            } else {
              setIsOwner(false);
            }
          })
        } else {
          res.json().then(json => setErrors(json.errors));
        }
      })
      .catch(console.error);
  }, [businessId, selectedBusiness, businessUsers.length, user.id])

  return (
    <FloatedContent>
      <PageTitle title="Manage Users" />
      <SelectBusiness 
        businesses={user.businesses} 
        selectedBusiness={selectedBusiness} 
        setSelectedBusiness={setSelectedBusiness}
      />
      {
      businessUsers.length > 0 &&
        <>
          <UsersList setErrors={setErrors} loggedInUserId={user.id} businessUsers={businessUsers} setBusinessUsers={setBusinessUsers} isOwner={isOwner} selectedBusiness={selectedBusiness} />
        </>
      }
      {
      isOwner ?
        <AddUser selectedBusiness={selectedBusiness} businessUsers={businessUsers} setBusinessUsers={setBusinessUsers} />
      :
        <Notice>
          You are only allowed to manage users for businesses you have created.
        </Notice>
      }
      <ErrorList errors={errors} />
    </FloatedContent>
  );
};

export default Users;