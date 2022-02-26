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

  const ownedBusinesses = user.businesses.filter(business => business.owner);

  useEffect(() => {
    if (!businessId) return;
    if (ownedBusinesses.map(ownedBusiness => ownedBusiness.business_id).includes(parseInt(businessId))) {
      setSelectedBusiness(businessId);
    }
  }, [businessId])

  useEffect(() => {
    if (!selectedBusiness || businessUsers.length > 0) return;
    fetch(`/businesses/${businessId}/users`)
      .then(res => {
        if (res.ok) {
          res.json().then(json => setBusinessUsers(json));
        } else {
          res.json().then(json => setErrors(json.errors));
        }
      })
      .catch(console.error);
  }, [selectedBusiness])

  return (
    <FloatedContent>
      <PageTitle title="Manage Users" />
      <SelectBusiness 
        ownedBusinesses={ownedBusinesses} 
        selectedBusiness={selectedBusiness} 
        setSelectedBusiness={setSelectedBusiness}
      />
      {
      businessUsers.length > 0 ?
        <>
          <UsersList loggedInUserId={user.id} businessUsers={businessUsers} />
          <AddUser appState={appState} />
        </>
      :
        <Notice>
          You are allowed to invite existing users to manage businesses you have created.
        </Notice>
      }
      <ErrorList errors={errors} />
    </FloatedContent>
  );
};

export default Users;