import styled from "styled-components";
import SecondaryTitle from "../../styles/SecondaryTitle";
import Item from "./Item";
import StyledLoadingButton from "../../styles/StyledLoadingButton";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 15px 0;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
  }
  grid-gap: 20px;
`;

const Items = ({ items, categoryName, businessState }) => {
  const { business } = businessState;

  const navigate = useNavigate();

  const handleAllClick = () => {
    navigate(`/${business.slug}`);
  };

  const renderItems = items
    .sort((a, b) => a.id - b.id)
    .map((item, idx) => (
      <Item key={idx} businessState={businessState} item={item} />
    ));

  return (
    <Container>
      <SecondaryTitle
        title="Items"
        secondaryTitle={categoryName}
        sideAction={
          <StyledLoadingButton onClick={handleAllClick}>
            All Items
          </StyledLoadingButton>
        }
      />
      <ItemsContainer>{renderItems}</ItemsContainer>
      {items.length === 0 && "No items found."}
    </Container>
  );
};

export default Items;
