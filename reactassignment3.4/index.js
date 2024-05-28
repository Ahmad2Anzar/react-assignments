


import React from "react"; // Importing React library
import ReactDOM from "react-dom/client"; // Importing ReactDOM for rendering React components
import App from "./App.jsx"; // Importing the main App component

import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing

// Rendering the main App component within BrowserRouter for enabling routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
