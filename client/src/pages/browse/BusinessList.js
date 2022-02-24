import styled from "styled-components";
import Business from "./Business";

const Container = styled.div``;

const BusinessList = ({ businessList, appState }) => {

  const renderBusinessList = businessList.map((business, businessIdx) => {
    return <Business key={businessIdx} business={business} appState={appState} />
  })

  return (
    <Container>
      {renderBusinessList}
    </Container>
  );
};

export default BusinessList;