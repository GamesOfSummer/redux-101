import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./store";
import StoreFront1 from "./pages/StoreFront1";
import StoreFront2 from "./pages/StoreFront2";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">test</div>

      <Routes>
        <Route path="StoreFront1" element={<StoreFront1 />} />
        <Route path="StoreFront2" element={<StoreFront2 />} />
      </Routes>
    </Provider>
  );
};

export default App;
