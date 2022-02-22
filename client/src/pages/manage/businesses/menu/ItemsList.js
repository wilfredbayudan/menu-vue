import styled from "styled-components";
import SecondaryTitle from "../../../../styles/SecondaryTitle";
import AddItem from "./AddItem";
import DisplayItems from "./DisplayItems";

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

  const filterItems = () => {
    if (selectedCategory) {
      return business.menu.items.filter(item => item.category_id === selectedCategory);
    }
  }

  return (
    <Container>
      <SecondaryTitle title={categoryTitle()} secondaryTitle="Items" sideAction={selectedCategory && <AddItem menuManagerState={menuManagerState} />} />
      {
        selectedCategory ?
        <DisplayItems menuManagerState={menuManagerState} displayItems={filterItems()} />
        :
        "Create or select a category to manage menu items."
      }
    </Container>
  )
}

export default ItemsList;