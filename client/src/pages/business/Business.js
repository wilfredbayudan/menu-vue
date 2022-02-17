import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

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
      <div>
        Business not found
      </div>
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