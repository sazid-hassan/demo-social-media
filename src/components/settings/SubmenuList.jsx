import SubMenuCard from "./SubMenuCard";
import { RiCustomerServiceLine, RiGroupLine } from "react-icons/ri";

const SubMenuList = () => {
  const subMenuData = [
    {
      title: "Help",
      icon: <RiCustomerServiceLine size={20} />,
      path: "/help",
    },

    {
      title: "Log Out",
      isLogOut: true,
    },
  ];

  return (
    <div>
      {subMenuData.map((d, i) => (
        <SubMenuCard
          key={i}
          isLogOut={d.isLogOut}
          icon={d.icon}
          title={d.title}
          subscribe={d.subscribe}
          path={d.path}
        />
      ))}
    </div>
  );
};

export default SubMenuList;
