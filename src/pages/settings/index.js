import MyHeader from "@/components/commons/MyHeader";
import SubMenuList from "@/components/settings/SubmenuList";
import { withAuth } from "@/configs/withAuth";

const Index = () => {
  return (
    <>
      <MyHeader state={3} />
      <SubMenuList />
    </>
  );
};

export default withAuth(Index);
