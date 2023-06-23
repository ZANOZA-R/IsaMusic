import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import MainNav from "./components/mainNav";
import CenterBlock from "./components/centerBlock";
import MainSidebar from "./components/mainSidebar";
import Bar from "./components/bar";

const root = ReactDOM.createRoot(document.querySelector(".wrapper"));
root.render(
  <React.StrictMode>
    <div className="container">
      <main className="main">
        <MainNav />
        <CenterBlock />
        <MainSidebar />
      </main>
      <div className="bar">
        <Bar />
      </div>
      <footer className="footer" />
    </div>
  </React.StrictMode>
);
