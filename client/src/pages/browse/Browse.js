import FloatedContent from "../../styles/FloatedContent";
import PageTitle from "../../styles/PageTitle";
import { useEffect, useState } from "react";
import BusinessList from "./BusinessList";
import LoaderOverlay from "../../components/LoaderOverlay";

const Browse = ({ appState }) => {

  const [businessList, setBusinessList] = useState([]);
  const {setAlert} = appState;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/businesses')
      .then(res => {
        setLoading(false);
        if (res.ok) {
          res.json().then(json => setBusinessList(json));
        } else {
          res.json()
            .then(console.error)
        }
      })
      .catch(setAlert({ text: "Something went wrong..." }));
  }, [setAlert]);

  if (loading) {
    return <LoaderOverlay loaderStatus />;
  };

  return (
    <FloatedContent fullWidth>
      <PageTitle title="Browse" />
      <BusinessList businessList={businessList} appState={appState} />
    </FloatedContent>
  );

};

export default Browse;