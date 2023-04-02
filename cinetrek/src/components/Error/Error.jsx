import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import errorImg from "../../media/error.png";

function Error({ search, setSearch }) {
  const handleError = () => {
    console.log("back home");
    setSearch("");
  };

  return (
    <div className="error__container">
      <img className="error__img" src={errorImg} alt="" />
      <h3 className="error__title">OOPS! </h3>
      <p className="error__heading">404 - You have reached a dead end.</p>
      <p className="error__desc">
        The page or movie you are trying to find might not exist or is currently
        unavailable
      </p>
      <Link to="/">
        <button onClick={handleError} className="backHome">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default Error;
