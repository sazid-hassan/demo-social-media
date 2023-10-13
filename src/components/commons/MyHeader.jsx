import React from "react";
import {
  AiFillHome,
  AiFillSetting,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";

import { CiUser } from "react-icons/ci";
import { BiSolidUser } from "react-icons/bi";
import Link from "next/link";

const MyHeader = ({ state }) => {
  const menus = [
    {
      id: 1,
      icon: <AiOutlineHome />,
      iconActive: <AiFillHome />,
      title: "Home",
      path: "/home",
    },
    {
      id: 2,
      icon: <CiUser />,
      iconActive: <BiSolidUser />,
      title: "Profile",
      path: "/profile",
    },
    {
      id: 3,
      icon: <AiOutlineSetting />,
      iconActive: <AiFillSetting />,
      title: "Settings",
      path: "/settings",
    },
  ];

  return (
    <div className="header">
      {menus.map((menu, i) => (
        <Link key={i} href={menu.path} className="menu-link">
          {state === menu.id ? menu.iconActive : menu.icon}
          <span>{menu.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default MyHeader;
