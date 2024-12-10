import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assuming you have a main component that renders your app
import './index.css'; // Add your global CSS here

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
