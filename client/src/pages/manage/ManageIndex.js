import { Outlet, useNavigate } from "react-router-dom";
import AlertPage from "../../components/AlertPage";
import { useSelector } from "react-redux";

const ManageIndex = () => {
  const userState = useSelector((state) => state.user);

  // const { user } = appState;
  const { user } = userState;

  const navigate = useNavigate();

  const handleAlertClose = () => {
    navigate("/login");
  };

  if (!user) {
    return (
      <AlertPage
        alertTitle="Oops!"
        alertText="You need to be logged in to do that!"
        onClose={handleAlertClose}
      />
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default ManageIndex;
