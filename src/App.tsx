import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import StoreFront1 from "./pages/StoreFront1";
import StoreFront2 from "./pages/StoreFront2";

const App: React.FC = () => {
  return (
    <div>
      <div className="App">Store Front</div>
      <Link to="/StoreFront1">Go to Store Front 1</Link>
      <br />
      <Link to="/StoreFront2">Go to Store Front 2</Link>

      <Routes>
        <Route path="StoreFront1" element={<StoreFront1 />} />
        <Route path="StoreFront2" element={<StoreFront2 />} />
      </Routes>
    </div>
  );
};

export default App;
