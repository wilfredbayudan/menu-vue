import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AlertPage from "../../components/AlertPage";
import FloatedContent from "../../styles/FloatedContent";
import PageTitle from "../../styles/PageTitle";
import styled from "styled-components";
import Placeholder from "../../assets/images/placeholder.png";
import Categories from "./Categories";
import DisplayItems from "./DisplayItems";
import StyledLoadingButton from "../../styles/StyledLoadingButton";
import ContentNotice from "../../styles/ContentNotice";
import LoaderOverlay from "../../components/LoaderOverlay";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Description = styled.p``;

const Image = styled.img`
  max-width: 100%;
  @media (min-width: 768px) {
    max-height: 150px;
  }
`;

const CategoryDescription = styled.p``;

const Business = () => {
  const userState = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [business, setBusiness] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { user } = userState;

  const businessState = {
    business,
    setBusiness,
    selectedCategory,
    setSelectedCategory,
  };

  let params = useParams();

  useEffect(() => {
    fetch(`/businesses/slug/${params.slugUrl}`).then((res) => {
      if (res.ok) {
        res.json().then((business) => setBusiness(business));
      } else {
        setNotFound(true);
      }
    });
  }, [params.slugUrl]);

  useEffect(() => {
    if (business && params.categorySlug) {
      const category = business.menu.categories.find(
        (category) => category.slug === params.categorySlug
      );
      if (category) {
        setSelectedCategory(category.id);
      }
    } else {
      setSelectedCategory(null);
    }
  }, [business, params.categorySlug]);

  if (notFound) {
    return (
      <AlertPage
        alertTitle="Oops!"
        alertText="That business could not be found."
      />
    );
  }

  const filteredItems = () => {
    if (!selectedCategory) return business.menu.items;
    return business.menu.items.filter(
      (item) => item.category_id === selectedCategory
    );
  };

  const categoryName = () => {
    if (!selectedCategory) return "All";
    return business.menu.categories.find(
      (category) => category.id === selectedCategory
    ).category;
  };

  const getCategoryObject = () => {
    if (!selectedCategory) return null;
    return business.menu.categories.find(
      (category) => category.id === selectedCategory
    );
  };

  const renderAuthorizedElement = (jsx) => {
    if (business && user) {
      if (
        user.businesses.find(
          (userBusiness) => userBusiness.business_id === business.id
        )
      ) {
        return jsx;
      }
    }
    return null;
  };

  const handleManageClick = () => {
    navigate(`/manage/businesses/${business.id}/menu`);
  };

  if (business) {
    return (
      <FloatedContent fullWidth>
        {renderAuthorizedElement(
          <ContentNotice>You manage this business.</ContentNotice>
        )}
        <PageTitle
          title={business.name}
          sideAction={renderAuthorizedElement(
            <StyledLoadingButton
              onClick={handleManageClick}
              startIcon={<SettingsIcon />}
            >
              Manage Menu
            </StyledLoadingButton>
          )}
        />
        <Info>
          <Image src={business.image ? business.image : Placeholder} />
          <Description>{business.description}</Description>
        </Info>
        <Categories categories={business.menu.categories} />
        <CategoryDescription>
          {selectedCategory && getCategoryObject().description}
        </CategoryDescription>
        <DisplayItems
          items={filteredItems()}
          categoryName={categoryName()}
          businessState={businessState}
        />
      </FloatedContent>
    );
  }

  return <LoaderOverlay loaderStatus />;
};

export default Business;
