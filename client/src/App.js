import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [count, setCount] = useState(0);

  const Home = () => {
    return (
      <div>
        <h1>Page Count: {count}</h1>
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

  useEffect(() => {
    fetch('/hello')
      .then(res => res.json())
      .then(json => setCount(json.count));
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="testing" element={<Test />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
