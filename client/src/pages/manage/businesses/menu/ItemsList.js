import styled from "styled-components";
import SecondaryTitle from "../../../../styles/SecondaryTitle";

const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  }
  grid-gap: 20px;
`;

const ItemSquare = styled.div`
  position: relative;
  border: 1px solid;
  box-sizing: border-box;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const ItemContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const ItemsList = ({ menuManagerState }) => {

  const { business, selectedCategory } = menuManagerState;

  const categoryTitle = () => {
    if (selectedCategory) {
      return `${business.menu.categories.find(category => category.id === selectedCategory).category} `;
    }
    return null;
  }

  const renderItems = () => {
    return (
      <ItemsContainer>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
        <ItemSquare>
          <ItemContent>
            Content
          </ItemContent>
        </ItemSquare>
      </ItemsContainer>
    )
  }

  return (
    <Container>
      <SecondaryTitle title={categoryTitle()} secondaryTitle="Items" />
      {
        selectedCategory ?
        renderItems()
        :
        "Create or select a category to manage menu items."
      }
    </Container>
  )
}

export default ItemsList;