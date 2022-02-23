import FloatedContent from "../../../styles/FloatedContent";
import PageTitle from "../../../styles/PageTitle";
import List from '@mui/material/List';
import Business from "./Business";
import AddBusiness from "./AddBusiness";
import styled from "styled-components";

const NoneFound = styled.p`
  margin-top: 0;
`;

const ManageBusinessesIndex = ({ appState }) => {

  const { user } = appState;

  const businesses = user.businesses;

  const renderBusinesses = businesses.map((businessItem, businessIdx) => {
    return <Business key={businessIdx} business={businessItem} appState={appState} />
  });

  return (
    <FloatedContent>
      <PageTitle title="Manage Businesses" />
      <List>
        {renderBusinesses}
      </List>
      { businesses.length === 0 && <NoneFound>No businesses found</NoneFound>}
      <AddBusiness appState={appState} />
    </FloatedContent>
  );
};

export default ManageBusinessesIndex;