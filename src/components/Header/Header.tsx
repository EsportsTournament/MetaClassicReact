import React, { FC, useEffect, useState } from "react";
import "./Header.scss";
import bgImg from "../../assets/images/logo2.png";
import {RiAccountCircleFill} from "react-icons/ri";
import axios from "axios";
const Header: FC = () => {
  const appName = "Meta Esports";
  const [me, setMe] = useState(null);

  useEffect(() => {
    async function getMe() {
      await axios
        .get("http://localhost:4000/auth/me", {
          withCredentials: true,
        })
        .then((res) => setMe(res.data));
    }

    getMe();
  }, []);

  if (me) {
    console.log(me);
    return <p>hi {JSON.stringify(me)}</p>;
  }

  return (
    <div className="header" data-testid="Header">
      <img className="logo" src={bgImg} alt="Logo" />
      <div className="title">{appName}</div>
      <div className="login">
        <RiAccountCircleFill /> UNAME
      <a href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2Fgoogle&client_id=888992868623-g5ffjm72bs7sli419ksdq44iinhml7kv.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email">
        LOGIN WITH GOOGLE
      </a>
      </div>
    </div>
  );
};

export default Header;
