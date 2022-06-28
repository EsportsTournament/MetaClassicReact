import React, { FC } from "react";
import "./Header.scss";
import bgImg from "../../assets/images/logo2.png";
import {RiAccountCircleFill} from "react-icons/ri";
const Header: FC = () => {
  const appName = "Meta Esports";

  return (
    <div className="header" data-testid="Header">
      <img className="logo" src={bgImg} alt="Logo" />
      <div className="title">{appName}</div>
      <div className="login">
        <RiAccountCircleFill /> UNAME
      </div>
    </div>
  );
};

export default Header;
