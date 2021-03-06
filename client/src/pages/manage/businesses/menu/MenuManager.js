import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FloatedContent from "../../../../styles/FloatedContent";
import PageTitle from "../../../../styles/PageTitle";
import styled from "styled-components";
import ContentNotice from "../../../../styles/ContentNotice";
import CategoriesList from "./CategoriesList";
import ItemsList from "./ItemsList";
import LoaderOverlay from "../../../../components/LoaderOverlay";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import TransparentLoadingButton from "../../../../styles/TransparentLoadingButton";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MenuManager = () => {
  const userState = useSelector((state) => state.user);

  const { businessId } = useParams();
  const [business, setBusiness] = useState({});

  const [selectedCategory, setSelectedCategory] = useState(null);

  const { user } = userState;

  const menuManagerState = {
    business,
    setBusiness,
    selectedCategory,
    setSelectedCategory,
  };

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const newUser = searchParams.get("newUser");

  useEffect(() => {
    // Only run if businessId found it user.businesses
    const permission = user.businesses.find(
      (userBusiness) => userBusiness.business_id === parseInt(businessId)
    );
    if (permission) {
      fetch(`/businesses/${businessId}`)
        .then((res) => {
          if (res.ok) {
            res.json().then(setBusiness);
          } else {
            navigate("/404");
          }
        })
        .catch(console.error);
    } else {
      console.log("No permission");
      navigate("/401");
    }
  }, [businessId, navigate, user.businesses, business.id]);

  const renderNewUserNotice = () => {
    if (!newUser) return null;
    return (
      <ContentNotice>
        Now that you've created your first business, we need to build your menu!
        Create a new category to begin adding items to your menu.
      </ContentNotice>
    );
  };

  const handleViewClick = () => {
    navigate(`/${business.slug}`);
  };

  if (!business.name) return <LoaderOverlay loaderStatus />;

  return (
    <FloatedContent fullWidth>
      {renderNewUserNotice()}
      <PageTitle
        title={`${business.name}`}
        secondaryTitle="Menu"
        sideAction={
          <TransparentLoadingButton
            onClick={handleViewClick}
            startIcon={<FindInPageIcon />}
          >
            View Business
          </TransparentLoadingButton>
        }
      />
      <Container>
        <CategoriesList menuManagerState={menuManagerState} />
        <ItemsList menuManagerState={menuManagerState} />
      </Container>
    </FloatedContent>
  );
};

export default MenuManager;
