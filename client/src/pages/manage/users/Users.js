import FloatedContent from "../../../styles/FloatedContent";
import PageTitle from "../../../styles/PageTitle";
import List from '@mui/material/List';
import styled from "styled-components";
import { useState } from "react";
import SelectBusiness from "./SelectBusiness";

const Notice = styled.p`
`;

const Users = ({ appState }) => {

  const { user } = appState;
  const [selectedBusiness, setSelectedBusiness] = useState('');

  const businesses = user.businesses;

  const ownedBusinesses = user.businesses.filter(business => business.owner);

  console.log(ownedBusinesses);

  return (
    <FloatedContent>
      <PageTitle title="Manage Users" />
      <Notice>
      You are allowed to invite users to manage businesses you have created.
      </Notice>
      <SelectBusiness 
        ownedBusinesses={ownedBusinesses} 
        selectedBusiness={selectedBusiness} 
        setSelectedBusiness={setSelectedBusiness}
      />
      <List>

      </List>
    </FloatedContent>
  );
};

export default Users;