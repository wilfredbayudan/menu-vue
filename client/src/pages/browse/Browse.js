import FloatedContent from "../../styles/FloatedContent";
import PageTitle from "../../styles/PageTitle";
import { useEffect } from "react";
import BusinessList from "./BusinessList";
import LoaderOverlay from "../../components/LoaderOverlay";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses } from "../../store/businessesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const businessesState = useSelector((state) => state.businesses);

  useEffect(() => {
    dispatch(fetchBusinesses());
  }, []);

  if (businessesState.status === "loading") {
    return <LoaderOverlay loaderStatus />;
  }

  return (
    <FloatedContent fullWidth>
      <PageTitle title="Browse" />
      <BusinessList businessList={businessesState.entities} />
    </FloatedContent>
  );
};

export default Browse;
