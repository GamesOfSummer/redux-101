import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";

import { store } from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">test</div>
    </Provider>
  );
};

export default App;
