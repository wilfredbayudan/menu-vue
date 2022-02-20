import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlertPage from "../../components/AlertPage";

const Business = () => {

  const [business, setBusiness] = useState(null)
  const [notFound, setNotFound] = useState(false)

  let params = useParams();

  useEffect(() => {
    fetch(`/businesses/slug/${params.slugUrl}`)
      .then(res => {
        if (res.ok) {
          res.json().then(business => setBusiness(business));
        } else {
          setNotFound(true);
        }
      })
  }, [params.slugUrl]);

  if (notFound) {
    return (
      <AlertPage alertTitle="Oops!" alertText="That business could not be found." />
    )
  }

  if (business) {
    return (
      <div>
        <h1>{business.name}</h1>
        <p>{business.description}</p>
      </div>
    )
  }

  return null;

}

export default Business;