import styled from "styled-components";

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
  margin: 5px;
`;

const Item = ({ item, menuManagerState }) => {
  return (
    <ItemSquare>
      <ItemContent>
        {item.item}<br />
        {item.description}<br />
        {item.price}
      </ItemContent>
    </ItemSquare>
  )
};

export default Item;