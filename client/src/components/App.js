import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from '../pages/Index';
import Business from '../pages/business/Business';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

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
          <Route path="manage" element={<h1>Manage Portal</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
