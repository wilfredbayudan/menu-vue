import styled from "styled-components";
import SecondaryTitle from "../../../../styles/SecondaryTitle";
import AddItem from "./AddItem";
import DisplayItems from "./DisplayItems";
import ItemSearchForm from "./ItemSearchForm";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

const ItemsList = ({ menuManagerState }) => {

  const { business, selectedCategory } = menuManagerState;

  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const categoryTitle = () => {
    if (selectedCategory) {
      return `${business.menu.categories.find(category => category.id === selectedCategory).category} `;
    }
    return null;
  }

  const filterItems = () => {
    if (selectedCategory) {
      const categoryItems = business.menu.items.filter(item => item.category_id === selectedCategory);
      if (search === "") return categoryItems;
      return categoryItems.filter(item => item.item.toLowerCase().includes(search.toLowerCase()));
    }
  }

  return (
    <Container>
      <SecondaryTitle title={categoryTitle()} secondaryTitle="Items" sideAction={selectedCategory && <AddItem menuManagerState={menuManagerState} />} />
      {
        selectedCategory ?
        <>
          <ItemSearchForm categoryTitle={categoryTitle()} search={search} handleSearchChange={handleSearchChange} />
          <DisplayItems menuManagerState={menuManagerState} displayItems={filterItems()} />
        </>
        :
        "Create or select a category to manage menu items."
      }
    </Container>
  )
}

export default ItemsList;