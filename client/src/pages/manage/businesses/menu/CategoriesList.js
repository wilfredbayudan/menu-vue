import styled from "styled-components";
import SecondaryTitle from "../../../../styles/SecondaryTitle";
import List from '@mui/material/List';
import Category from "../menu/Category";
import AddEditCategory from "./AddEditCategory";

const Container = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  padding: 15px;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

const CategoriesList = ({ menuManagerState }) => {

  const { business } = menuManagerState;

  const renderCategories = () => {
    if (!business.menu) return null;
    return business.menu.categories.map((category, categoryIdx) => {
      return <Category key={categoryIdx} category={category} menuManagerState={menuManagerState} />
    })
  }

  return (
    <Container>
      <SecondaryTitle title="Categories" />
      <List dense>
        {renderCategories()}
        {
          business.menu && business.menu.categories.length === 0 &&
          <>
            No categories found
          </>
        }
        
      </List>
      <AddEditCategory menuManagerState={menuManagerState} />
    </Container>
  )
}

export default CategoriesList;