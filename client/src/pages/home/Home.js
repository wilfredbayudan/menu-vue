import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/browse'); // temporarily navigate home to browse page
  }, [navigate]);

  return null;
};

export default Home;