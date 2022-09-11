import React, { FC, useEffect, useState } from "react";
import "./Menubar.scss";
import { AiFillHome } from "react-icons/ai";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { RiSwordFill } from "react-icons/ri";

const Menubar: FC = () => {
  const pages = [
    {
      "path": "",
      "value": 0,
      "icon": <AiFillHome />,
      "name": "Home"
    },
    {
      "path": "myMatch",
      "value": 1,
      "icon": <IoLogoGameControllerB />,
      "name": "Games"
    },
    {
      "path": "war",
      "value": 2,
      "icon": <RiSwordFill />,
      "name": "Wars"
    },
    {
      "path": "join-us",
      "value": 3,
      "icon": <FaHandshake />,
      "name": "Join Us"
    },
  ];
  const location = useLocation();
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(pages.filter( page => ("/" + page.path) == location.pathname)[0].value);
  }, [location]);
  
  return (
    <>
      <div className="menubar">
        <nav className="nav-container">
          {pages.map(page => {
            return <Link key={page.value} id={page.path}
            className={"nav-btn " + (value === page.value ? "active-nav" : "")}
            to={"/" + page.path} onClick={() => {
              setValue(page.value);
            }} >
              {page.icon} {page.name}
            </Link>;
          })}
        </nav>
      </div>
    </>
  );
};

export default Menubar;
