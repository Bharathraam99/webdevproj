import React from "react";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import Feed from "./Feed/feed";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

 <Router>
    <App />
  </Router>
  </React.StrictMode>
);







