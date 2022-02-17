import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Index';
import Business from '../pages/business/Business';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

function App() {

  useEffect(() => {
    fetch('/me')
      .then(res => res.json())
      .then(json => console.log(json))
  })

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
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path=":slugUrl" element={<Business />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
