import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./store";
import StoreFront1 from "./pages/StoreFront1";
import StoreFront2 from "./pages/StoreFront2";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">Store Front</div>
      <Link to="/StoreFront1">Go to Store Front 1</Link>
      <br />
      <Link to="/StoreFront2">Go to Store Front 2</Link>

      <Routes>
        <Route path="StoreFront1" element={<StoreFront1 />} />
        <Route path="StoreFront2" element={<StoreFront2 />} />
      </Routes>
    </Provider>
  );
};

export default App;
