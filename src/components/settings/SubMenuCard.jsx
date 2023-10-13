import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { AiOutlineRight } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const SubMenuCard = ({ title, icon, isLogOut, subscribe, path }) => {
  const router = useRouter();

  const proceed = () => {
    if (isLogOut) {
      Cookies.remove("ctn");
      router.push("/");
    } else {
      router.push(path);
    }
  };

  return (
    <div
      className={subscribe ? "submenu-card subscribe-card" : "submenu-card"}
      onClick={proceed}
    >
      <div className={isLogOut ? "info-submenu log-out-card" : "info-submenu"}>
        {icon}
        <p>{title}</p>
      </div>

      {isLogOut ? <BiLogOut color="red" /> : <AiOutlineRight />}
    </div>
  );
};

export default SubMenuCard;
