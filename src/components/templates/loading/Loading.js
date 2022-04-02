import React from "react";
import "./loading.css";
import logo from "../../images/logo.png";
function Loading() {
  return (
    <div className="loading">
      <img src={logo} alt="logo" />
      <h1>Loading.....</h1>
    </div>
  );
}

export default Loading;
