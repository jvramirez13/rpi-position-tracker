import React from "react";
import Interface from "./Components/Interface.js";
import { Provider } from "react-redux";
import { store } from "./Redux.js";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Interface />
      </div>
    </Provider>
  );
};

export default App;
