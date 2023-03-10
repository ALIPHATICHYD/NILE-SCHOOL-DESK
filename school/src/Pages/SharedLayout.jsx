import React from "react";
import Navbar from "../Components/navbar";
import { Outlet } from "react-router";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
