import styled from "styled-components";
import SecondaryTitle from "../../../../styles/SecondaryTitle";


const Container = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  padding: 15px;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

const Categories = ({ menuManagerState }) => {

  const { setSelectedCategory, business, setBusiness } = menuManagerState;


  const renderCategories = () => {
    if (!business.menu) return null;
    return business.menu.categories.map((category, categoryIdx) => {
      return <div key={categoryIdx} onClick={() => setSelectedCategory(category.id)}>{category.category}</div>
    })
  }

  return (
    <Container>
      <SecondaryTitle title="Categories" />
      { renderCategories() }
    </Container>
  )
}

export default Categories;