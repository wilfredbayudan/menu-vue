import styled from "styled-components";
import ItemImagePlaceholder from "../../../../assets/images/item_placeholder.png";

const ItemSquare = styled.div`
  position: relative;
  background-color: #f4f4f4;
  border: 3px solid #e3e3e3;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ItemImage = styled.img`
  max-height: 65%;
  max-width: 100%;
`;

const ItemName = styled.span`
  font-weight: bold;
`;

const ItemPrice = styled.div`
  flex-shrink: 0;
  height: 20px;
`;

const Item = ({ item, menuManagerState }) => {
  return (
    <ItemSquare>
      <ItemContent>
        <ItemName>{item.item}</ItemName>
        <ItemImage src={item.image ? item.image : ItemImagePlaceholder} />
        <ItemPrice>${item.price}</ItemPrice>
      </ItemContent>
    </ItemSquare>
  )
};

export default Item;