import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FloatedContent from "../../../../styles/FloatedContent";
import PageTitle from "../../../../styles/PageTitle";
import styled from "styled-components";
import ContentNotice from "../../../../styles/ContentNotice";
import CategoriesList from "./CategoriesList";
import ItemsList from "./ItemsList";

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

  const renderNewUserNotice = () => {
    if (!newUser) return null;
    return (
      <ContentNotice>
        Now that you've created your first business, we need to build your menu! Create a new category to begin adding items to your menu.
      </ContentNotice>
    )
  }

  if (!business.name) return null;

  return (
    <FloatedContent fullWidth>
      {renderNewUserNotice()}
      <PageTitle title={`${business.name}`} secondaryTitle="Menu Manager" />
      <Container>
        <CategoriesList menuManagerState={menuManagerState} />
        <ItemsList menuManagerState={menuManagerState} />
      </Container>
    </FloatedContent>
  )
}

export default MenuManager;