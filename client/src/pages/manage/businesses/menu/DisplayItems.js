import styled from "styled-components";
import Item from './Item';

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


const DisplayItems = ({ displayItems, menuManagerState }) => {

  console.log(displayItems);

  const renderItems = displayItems.map((displayItem, idx) => <Item key={idx} menu={menuManagerState} item={displayItem} />)

  if (displayItems.length === 0) return "No items here yet!"

  return (
    <ItemsContainer>
      {renderItems}
    </ItemsContainer>
  )

}

export default DisplayItems;