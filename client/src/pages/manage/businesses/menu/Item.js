import styled from "styled-components";
import ItemImagePlaceholder from "../../../../assets/images/item_placeholder.png";
import EditItem from "./EditItem";

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
  justify-content: space-between;
`;

const ItemImage = styled.img`
  max-height: 70%;
  max-width: 100%;
`;

const ItemName = styled.span`
  font-weight: 400;
  height: 15%;
  display: flex;
  align-items: center;
  text-align: center;
`;

const ItemPrice = styled.div`
  flex-shrink: 0;
  height: 15%;
  display: flex;
  font-size: 0.9em;
  color: #1a1a1a;
  align-items: center;
`;

const RightAction = styled.div`
  position: absolute;
  right: 0;
`;

const Item = ({ item, menuManagerState }) => {

  return (
    <ItemSquare>
      <ItemContent>
        <ItemName>{item.item}</ItemName>
        <ItemImage src={item.image ? item.image : ItemImagePlaceholder} />
        <ItemPrice>
          <span>${item.price}</span>
          <RightAction>
            <EditItem menuManagerState={menuManagerState} item={item} />
          </RightAction>
        </ItemPrice>
      </ItemContent>
    </ItemSquare>
  )
};

export default Item;