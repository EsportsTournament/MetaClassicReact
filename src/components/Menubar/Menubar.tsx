import React, { FC, useState } from "react";
import "./Menubar.scss";
import { AiFillHome } from "react-icons/ai";
import { IoLogoGameControllerB } from "react-icons/io";
import { BsTrophyFill } from "react-icons/bs";
import { MdOutlineSupport } from "react-icons/md";
import { Link } from "react-router-dom";

const Menubar: FC = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="menubar">
        <nav className="nav-container">
          <Link
            id="home"
            className={"nav-btn " + (value === 0 ? "active-nav" : "")}
            onClick={() => {
              setValue(0);
            }}
            to="/home"
          >
            <AiFillHome />
            Home
          </Link>
          <Link
            id="profile"
            className={"nav-btn " + (value === 1 ? "active-nav" : "")}
            onClick={() => {
              setValue(1);
            }}
            to="/upcoming"
          >
            <IoLogoGameControllerB />
            Upcoming
          </Link>
          <Link
            id="myMatch"
            className={"nav-btn " + (value === 2 ? "active-nav" : "")}
            onClick={() => {
              setValue(2);
            }}
            to="/myMatch"
          >
            <BsTrophyFill />
            My Match
          </Link>
          <Link
            id="support"
            className={"nav-btn " + (value === 3 ? "active-nav" : "")}
            onClick={() => {
              setValue(3);
            }}
            to="/support"
          >
            <MdOutlineSupport />
            Support
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Menubar;
