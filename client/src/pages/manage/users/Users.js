import FloatedContent from "../../../styles/FloatedContent";
import PageTitle from "../../../styles/PageTitle";
import List from '@mui/material/List';
import styled from "styled-components";

const NoneFound = styled.p`
  margin-top: 0;
`;

const Users = ({ appState }) => {

  const { user } = appState;

  const businesses = user.businesses;

  const ownedBusinesses = user.businesses.filter(business => business.owner);

  console.log(ownedBusinesses);

  return (
    <FloatedContent>
      <PageTitle title="Manage Users" />
      You are allowed to invite users to manage businesses you have created.
      <List>

      </List>
    </FloatedContent>
  );
};

export default Users;