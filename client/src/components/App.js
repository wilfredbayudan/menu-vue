import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from '../pages/Index';
import Business from '../pages/business/Business';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import ManageIndex from '../pages/manage/ManageIndex';
import ManageBusinessesOutlet from '../pages/manage/businesses/ManageBusinessesOutlet';
import ManageBusinessesIndex from '../pages/manage/businesses/ManageBusinessesIndex';
import ManageBusinessesNew from '../pages/manage/businesses/ManageBusinessesNew';
import AlertPage from '../components/AlertPage';

function App() {

  const [user, setUser] = useState(null);

  const appState = {
    user, setUser
  }

  useEffect(() => {
    fetch('/me')
      .then(res => {
        if (res.ok) {
          res.json().then(json => setUser(json));
        }
      })
      .catch(console.error)
  },[])

  const Home = () => {
    return (
      <div>
        <h1>Home Route</h1>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index appState={appState} />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup appState={appState} />} />
          <Route path="login" element={<Login appState={appState} />} />
          <Route path=":slugUrl" element={<Business appState={appState} />} />
          <Route path="manage" element={<ManageIndex appState={appState} />}>
            <Route index element={<>Dashboard</>} />
            <Route path="businesses" element={<ManageBusinessesOutlet />}>
              <Route index element={<ManageBusinessesIndex appState={appState} />} />
              <Route path="new" element={<ManageBusinessesNew appState={appState} />} />
            </Route>
            <Route path="test" element={<>Test Route</>} />
          </Route>
          <Route path="*" element={<AlertPage alertTitle="Oops!" alertText="That page could not be found." />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
