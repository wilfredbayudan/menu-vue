import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import { primaryColor } from "../../styles/colorList";

const Container = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  padding: 1px;
  margin: 15px 0;
`;

const CategoriesList = styled.ul`
  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 0;
  gap: 10px;

  a {
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: #1a1a1a;
    font-weight: 350;
    margin: 2px 10px 0 10px;
    font-size: 1.3rem;
    list-style: none;
    border-bottom: 3px solid #f4f4f4;
    padding-bottom: 8px;
    text-transform: uppercase;
  }

  li:hover {
    color: ${primaryColor};
  }

  .current {
    li {
      border-bottom: 3px solid ${primaryColor};
    }
  }
`;

const Categories = ({ categories }) => {

  const params = useParams();

  const renderCategories = categories.map((category, categoryIdx) => {
    return (
      <NavLink key={categoryIdx} to={`/${params.slugUrl}/${category.slug}`} className={({ isActive }) => isActive ? "current" : ""}><li>{category.category}</li></NavLink>      
    ) 

  })

  return (
    <Container>
      <CategoriesList>
        {categories.length > 0 ? renderCategories : "Nothing to see here, yet."}
        {/* <NavLink end to={`/${params.slugUrl}`} className={({ isActive }) => isActive ? "current" : ""}><li>All</li></NavLink> */}
      </CategoriesList>
    </Container>
  );
};

export default Categories;