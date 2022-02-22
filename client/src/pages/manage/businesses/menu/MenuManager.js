import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FloatedContent from "../../../../styles/FloatedContent";
import PageTitle from "../../../../styles/PageTitle";
import styled from "styled-components";
import ContentNotice from "../../../../styles/ContentNotice";
import Categories from "../../businesses/menu/Categories";
import Items from "../../businesses/menu/Items";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MenuManager = ({ appState }) => {

  const { businessId } = useParams();
  const [business,setBusiness] = useState({});

  const [selectedCategory, setSelectedCategory] = useState(null);

  const menuManagerState = {
    business, setBusiness,
    selectedCategory, setSelectedCategory
  };

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const newUser = searchParams.get("newUser");

  useEffect(() => {
    fetch(`/businesses/${businessId}`)
      .then(res => {
        if (res.ok) {
          res.json().then(setBusiness);
        } else {
          navigate("/404");
        }
      })
      .catch(console.error)
  }, [businessId, navigate])

  console.log(selectedCategory);

  const renderNewUserNotice = () => {
    if (!newUser) return null;
    return (
      <ContentNotice>
        Now that you've created your first business, we need to build your menu! Create a new category to begin adding items to your menu.
      </ContentNotice>
    )
  }

  return (
    <FloatedContent fullWidth>
      {renderNewUserNotice()}
      <PageTitle title={`${business.name}`} secondaryTitle="Menu Manager" />
      <Container>
        <Categories menuManagerState={menuManagerState} />
        <Items menuManagerState={menuManagerState} />
      </Container>
    </FloatedContent>
  )
}

export default MenuManager;