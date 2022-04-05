import FloatedContent from "../../styles/FloatedContent";
import PageTitle from "../../styles/PageTitle";
import { useEffect, useState } from "react";
import BusinessList from "./BusinessList";
import LoaderOverlay from "../../components/LoaderOverlay";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses } from "../../store/businessesSlice";

const Browse = () => {
  // REDUX
  const dispatch = useDispatch();
  const businessesState = useSelector((state) => state.businesses);

  console.log(businessesState);

  // REDUX FETCH
  useEffect(() => {
    dispatch(fetchBusinesses());
  }, []);

  // NON-REDUX FETCH
  // const [businessList, setBusinessList] = useState([]);
  // const { setAlert } = appState;
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("/businesses").then((res) => {
  //     setLoading(false);
  //     if (res.ok) {
  //       res
  //         .json()
  //         .then((json) => setBusinessList(json))
  //         .catch(() => setAlert({ text: `Failed to fetch businesses.` }));
  //     } else {
  //       res
  //         .json()
  //         .then(console.error)
  //         .catch(() => setAlert({ text: `Failed to fetch businesses.` }));
  //     }
  //   });
  // }, [setAlert]);

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
