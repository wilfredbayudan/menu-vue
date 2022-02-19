import { Outlet, useNavigate } from "react-router-dom";

const ManageIndex = ({ appState }) => {

  const { user } = appState;

  const navigate = useNavigate();

  if (!user) {
    setTimeout(() => {
      navigate("/login");
    }, 5000)
    return <>Hmm, doesn't look like you have permission to do that!</>
  }

  return (
    <>
      <div>Manage Portal</div>
      <Outlet />
    </>
  )

}

export default ManageIndex;