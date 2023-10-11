import React, { useEffect, useState } from "react";
import Sidebar from "../commons/Sidebar";
import { useRouter } from "next/router";

function MainLayout({ children }) {
  const [ShowSider, setShowSider] = useState();
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);

    if (router.pathname != "/login" || "/signup") {
      console.log(router.pathname == "login");
      setShowSider(false);
    }
  }, [router]);

  return (
    <div className="main-layout">
      {ShowSider && <Sidebar />} <div className="container">{children}</div>
      {ShowSider && <Sidebar />}
    </div>
  );
}

export default MainLayout;
