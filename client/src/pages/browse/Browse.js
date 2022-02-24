import FloatedContent from "../../styles/FloatedContent";
import PageTitle from "../../styles/PageTitle";
import { useEffect, useState } from "react";
import BusinessList from "./BusinessList";

const Browse = ({ appState }) => {

  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    fetch('/businesses')
      .then(res => {
        if (res.ok) {
          res.json().then(json => setBusinessList(json));
        } else {
          res.json().then(console.error);
        }
      })
  }, []);

  return (
    <FloatedContent fullWidth>
      <PageTitle title="Browse" />
      <BusinessList businessList={businessList} appState={appState} />
    </FloatedContent>
  );

};

export default Browse;