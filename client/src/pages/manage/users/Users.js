import FloatedContent from "../../../styles/FloatedContent";
import PageTitle from "../../../styles/PageTitle";
import List from '@mui/material/List';
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SelectBusiness from "./SelectBusiness";
import ErrorList from "../../../components/ErrorList";

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
    setSelectedBusiness(businessId);
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
      <Notice>
      You are allowed to invite existing users to manage businesses you have created.
      </Notice>
      <SelectBusiness 
        ownedBusinesses={ownedBusinesses} 
        selectedBusiness={selectedBusiness} 
        setSelectedBusiness={setSelectedBusiness}
      />
      <List>

      </List>
      <ErrorList errors={errors} />
    </FloatedContent>
  );
};

export default Users;