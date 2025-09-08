import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Connecting Redux to the React Application,To connect Redux with React, we use the Provider component from the react-redux package.Now the entire React application has access to the Redux store.

 */}

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
