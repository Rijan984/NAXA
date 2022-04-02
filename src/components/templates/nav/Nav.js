import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login, selectUser } from "../../../features/userSlice";
import logo from "../../images/logo.png";
import "./nav.css";
function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redux = useSelector(selectUser);
  const logout = (e) => {
    e.preventDefault();
    dispatch(
      login({
        username: null,
      })
    );
    navigate("/signup");
  };
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="content">
        {redux.username && <p onClick={logout}>Logout</p>}
      </div>
    </div>
  );
}

export default Nav;
