import React, { FC } from "react";
const Header: FC = () => {
  const appName = "Meta Esports";

  return (
    <div className="header" data-testid="Header">
      <img className="logo" src="../../images/logo.PNG" alt="Logo" />
      <div className="title">{appName}</div>
      <div className="login"></div>{" "}
    </div>
  );
};

export default Header;
