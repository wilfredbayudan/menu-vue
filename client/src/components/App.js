import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Index';
import Business from '../pages/business/Business';

function App() {

  useEffect(() => {
    fetch('/me')
      .then()
  })

  const Home = () => {
    return (
      <div>
        <h1>Home Route</h1>
      </div>
    )
  }
  
  const Test = () => {
    return (
      <div>
        <h1>Test Route</h1>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="test" element={<Test />} />
          <Route path="home" element={<Home />} />
          <Route path=":slugUrl" element={<Business />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
