import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Menubar/Home/Home";
import Upcoming from "./Menubar/Upcoming/Upcoming";
import Support from "./Menubar/Support/Support";
import MyMatch from "./Menubar/My-Match/My-Match";

const RouterComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/myMatch" element={<MyMatch />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};

export default RouterComp;
