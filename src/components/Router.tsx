import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Menubar/Home/Home";
import Upcoming from "./Menubar/Upcoming/Upcoming";
import Support from "./Menubar/Support/Support";
import MyMatch from "./Menubar/My-Match/My-Match";
import ComingSoon from "./Shared/ComingSoon/ComingSoon";
import COCWar from "./Menubar/Home/COC/COCWar";

const RouterComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/soon" element={<ComingSoon />} />
      <Route path="/home" element={<Home />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/myMatch" element={<MyMatch />} />
      <Route path="/support" element={<Support />} />
      <Route path="/war" element={<COCWar />} />
    </Routes>
  );
};

export default RouterComp;
