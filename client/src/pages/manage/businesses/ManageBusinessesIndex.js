import FloatedContent from "../../../styles/FloatedContent";
import PageTitle from "../../../styles/PageTitle";
import List from "@mui/material/List";
import Business from "./Business";
import AddBusiness from "./AddBusiness";
import styled from "styled-components";
import { useSelector } from "react-redux";

const NoneFound = styled.p`
  margin-top: 0;
`;

const ManageBusinessesIndex = () => {
  const userState = useSelector((state) => state.user);

  // const businesses = user.businesses;
  const businesses = userState.user.businesses;

  const renderBusinesses = businesses.map((businessItem, businessIdx) => {
    return <Business key={businessIdx} business={businessItem} />;
  });

  return (
    <FloatedContent>
      <PageTitle title="Manage Businesses" />
      <List>{renderBusinesses}</List>
      {businesses.length === 0 && <NoneFound>No businesses found</NoneFound>}
      <AddBusiness />
    </FloatedContent>
  );
};

export default ManageBusinessesIndex;
