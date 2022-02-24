import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = styled.section`
  padding: 20px 10px;
  background-color: #f4f4f4;
  margin-bottom: 15px;
  border-bottom: 4px solid #b9b9b9;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  &:hover { 
    background-color: #f4fefb;
  }
`;

const BusinessImage = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

const BusinessInfo = styled.div`
  padding: 8px 0 8px 0;
`;

const BusinessName = styled.h3`
  border-bottom: 3px solid #d9d9d9;
  padding-bottom: 10px;
  padding-top: 10px;
  margin: 0;
  @media (min-width: 768px) {
    padding-top: 5px;
    margin: 0 10px 4px 20px;
  }
`;

const Description = styled.p`
  padding-top: 5px;
  @media (min-width: 768px) {
    margin: 0 10px 4px 20px;
  }
`;

const PopularItems = styled.p`
  padding-top: 5px;
  @media (min-width: 768px) {
    margin: 0 10px 0 20px;
  }
`;

const Business = ({ business, appState }) => {

  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/${business.slug}`);
  };

  const popularItems = business.popular_items.map(item => item.item).join(', ');

  return (
    <Card onClick={handleViewClick}>
      <BusinessImage src={business.image} />
      <BusinessInfo>
        <BusinessName>{business.name}</BusinessName>
        <Description>{business.description}</Description>
        <PopularItems><b>Popular Items:</b> {popularItems}</PopularItems>
      </BusinessInfo>
    </Card>
  );
};

export default Business;