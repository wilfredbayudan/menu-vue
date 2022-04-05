import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Index from "../pages/Index";
import Business from "../pages/business/Business";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import ManageIndex from "../pages/manage/ManageIndex";
import ManageBusinessesOutlet from "../pages/manage/businesses/ManageBusinessesOutlet";
import ManageBusinessesIndex from "../pages/manage/businesses/ManageBusinessesIndex";
import ManageBusinessesNew from "../pages/manage/businesses/ManageBusinessesNew";
import AlertPage from "../components/AlertPage";
import MenuManager from "../pages/manage/businesses/menu/MenuManager";
import Browse from "../pages/browse/Browse";
import Users from "../pages/manage/users/Users";
import Home from "../pages/home/Home";
import AlertOverlay from "./AlertOverlay";
import { login } from "../store/userSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();

  const appState = {
    user,
    setUser,
    alert,
    setAlert,
  };

  useEffect(() => {
    fetch("/me")
      .then((res) => {
        if (res.ok) {
          res.json().then((json) => {
            dispatch(login(json));
          });
        }
      })
      .catch(console.error);
  }, []);

  return (
    <BrowserRouter>
      <AlertOverlay alert={alert} setAlert={setAlert} />
      <Routes>
        <Route path="/" element={<Index appState={appState} />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse appState={appState} />} />
          <Route path="how" element={<>How it works</>} />
          <Route path="about" element={<>About Us</>} />
          <Route path="signup" element={<Signup appState={appState} />} />
          <Route path="login" element={<Login appState={appState} />} />
          <Route
            path="401"
            element={
              <AlertPage
                alertTitle="Oops!"
                alertText="You shouldn't be allowed to access this."
              />
            }
          />
          <Route path=":slugUrl" element={<Outlet />}>
            <Route index element={<Business appState={appState} />} />
            <Route
              path=":categorySlug"
              element={<Business appState={appState} />}
            />
          </Route>
          {/* Manage Routes */}
          <Route path="manage" element={<ManageIndex appState={appState} />}>
            <Route index element={<>Dashboard</>} />
            <Route path="users" element={<Users appState={appState} />} />
            {/* Manage Businesses Routes */}
            <Route path="businesses" element={<ManageBusinessesOutlet />}>
              <Route
                index
                element={<ManageBusinessesIndex appState={appState} />}
              />
              <Route
                path="new"
                element={<ManageBusinessesNew appState={appState} />}
              />
              {/* Manage Individual Business Routes */}
              <Route path=":businessId" element={<Outlet />}>
                <Route
                  path="menu"
                  element={<MenuManager appState={appState} />}
                />
              </Route>
            </Route>
            <Route path="test" element={<>Test Route</>} />
          </Route>
          <Route
            path="*"
            element={
              <AlertPage
                alertTitle="Oops!"
                alertText="That page could not be found."
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
