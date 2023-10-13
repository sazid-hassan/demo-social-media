import MyHeader from "@/components/commons/MyHeader";
import { withAuth } from "@/configs/withAuth";

const Index = () => {
  return (
    <>
      <MyHeader state={3} />
      <p>This is Help Page</p>
    </>
  );
};

export default withAuth(Index);
