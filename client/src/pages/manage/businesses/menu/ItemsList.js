import styled from "styled-components";
import SecondaryTitle from "../../../../styles/SecondaryTitle";

const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

const ItemsList = ({ menuManagerState }) => {

  const { business, selectedCategory } = menuManagerState;

  const categoryTitle = () => {
    if (selectedCategory) {
      return `${business.menu.categories.find(category => category.id === selectedCategory).category} `;
    }
    return null;
  }

  return (
    <Container>
      <SecondaryTitle title={categoryTitle()} secondaryTitle="Items" />
      {
        selectedCategory ?
        "Show Items Here"
        :
        "Create or select a category to manage menu items."
      }
    </Container>
  )
}

export default ItemsList;