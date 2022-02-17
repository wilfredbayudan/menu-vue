import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [count, setCount] = useState(0);

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
      TEST
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="testing" element={<Test />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
      TEST
    </BrowserRouter>
  );
}

export default App;
