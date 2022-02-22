import styled from "styled-components";
import SecondaryTitle from "../../../../styles/SecondaryTitle";

const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

const ItemsList = () => {
  return (
    <Container>
      <SecondaryTitle title="Items" />
    </Container>
  )
}

export default ItemsList;