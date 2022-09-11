import React, { FC, useEffect, useState } from "react";
import "./Header.scss";
import bgImg from "../../assets/images/logo2.png";
import axios from "axios";
import { User } from "../../models/user";
import { useNavigate } from "react-router-dom";
const Header: FC = () => {
  const backendURL = "https://user-manager-meta.herokuapp.com";
  const navigate = useNavigate();
  // const backendURL = "http://192.168.1.4:3000";
  const appName = "Meta";
  const [me, setMe] = useState({} as User);
  const [loginURL, setLoginURL] = useState("https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fuser-manager-meta.herokuapp.com%2Fauth%2Fgoogle&client_id=888992868623-g5ffjm72bs7sli419ksdq44iinhml7kv.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email");

  async function getLoginURL() {
    await axios
      .get(`${backendURL}/auth/google/url`, {
        withCredentials: true,
      })
      .then((res) => setLoginURL(res.data));
  }
  async function getMe() {
    await axios
      .get(`${backendURL}/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        const currentUser = res.data as User;
        setMe(currentUser);
      });
  }

  // useEffect(() => {
  //   getLoginURL();
  //   getMe();
  // }, []);

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="header" data-testid="Header">
      <div className="mt-pointer" onClick={navigateToHome}>
        <img className="logo" src={bgImg} alt="Logo" />
      </div>
      <div className="title mt-pointer" onClick={navigateToHome}>{appName}</div>
      <div className="glass-button login">
        {me.name ? (<div className="userName">{me.name}</div>) : <a href={loginURL}>
          Login
        </a>}
      </div>
    </div>
  );
};

export default Header;
