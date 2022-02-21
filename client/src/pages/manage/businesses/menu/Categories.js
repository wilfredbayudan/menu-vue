import styled from "styled-components";
import SecondaryTitle from "../../../../styles/SecondaryTitle";


const Container = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  padding: 15px;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

const Categories = () => {
  return (
    <Container>
      <SecondaryTitle title="Categories" />
    </Container>
  )
}

export default Categories;