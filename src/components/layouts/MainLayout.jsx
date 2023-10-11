import React, { useEffect, useState } from "react";
import Sidebar from "../commons/Sidebar";
import { Grid } from "antd";
import { useSelector } from "react-redux";

function MainLayout({ children }) {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);

  return (
    <div className="main-layout">
      {screens.lg && showSidebar && <Sidebar />}{" "}
      <div className="container">{children}</div>
      {screens.lg && showSidebar && <Sidebar submenus={true} />}
    </div>
  );
}

export default MainLayout;
