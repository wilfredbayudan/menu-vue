import FloatedContent from "../../styles/FloatedContent";
import PageTitle from "../../styles/PageTitle";
import { useEffect, useState } from "react";
import BusinessList from "./BusinessList";

const Browse = ({ appState }) => {

  const [businessList, setBusinessList] = useState([]);
  const {setAlert} = appState;

  useEffect(() => {
    fetch('/businesses')
      .then(res => {
        if (res.ok) {
          res.json().then(json => setBusinessList(json));
        } else {
          res.json()
            .then(console.error)
            .catch(setAlert({ text: "Something went wrong..." }))
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