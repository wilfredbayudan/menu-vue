import styled from "styled-components";
import Placeholder from "../../assets/images/placeholder.png";
import LikeItem from "./LikeItem";
import Comment from "./Comment";

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
  &:hover {
    border: 3px solid #8b8b8b;
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
  max-height: 65%;
  max-width: 100%;
`;

const ItemName = styled.span`
  font-weight: 350;
  height: 15%;
  display: flex;
  align-items: center;
  text-align: center;
`;

const ItemPrice = styled.div`
  flex-shrink: 0;
  font-weight: 350;
  height: 20%;
  display: flex;
  font-size: 0.85em;
  color: #1a1a1a;
  align-items: center;
`;

const RightAction = styled.div`
  position: absolute;
  right: 6px;
`;

const LeftAction = styled.div`
  position: absolute;
  left: 6px;
`;

const Price = styled.span`
  background-color: #ffd452;
  padding: 4px 10px;
  border-radius: 4px;
`;

const Item = ({ item, businessState, appState }) => {

  return (
    <ItemSquare>
      <ItemContent>
        <ItemName>{item.item}</ItemName>
        <ItemImage src={item.image ? item.image : Placeholder} />
        <ItemPrice>
          <LeftAction>
            <Price>${item.price}</Price>
          </LeftAction>
          <RightAction>
            <LikeItem item={item} businessState={businessState} />
            <Comment item={item} businessState={businessState} appState={appState} />
          </RightAction>
        </ItemPrice>
      </ItemContent>
    </ItemSquare>
  )
};

export default Item;