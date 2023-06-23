import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import MainNav from "./components/mainNav";
import CenterBlock from "./components/centerBlock";

const root = ReactDOM.createRoot(document.querySelector(".wrapper"));
root.render(
  <React.StrictMode>
    <div className="container">
      <main className="main">
        <MainNav />
        <CenterBlock />
      </main>
    </div>
  </React.StrictMode>
);
