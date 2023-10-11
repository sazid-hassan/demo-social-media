import MyHeader from "@/components/commons/MyHeader";
import PostCard from "@/components/commons/PostCard";
import StatusUpdate from "@/components/home/StatusUpdate";
import { showSidebar } from "@/redux-store/slices/sidebarSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSidebar());
  }, []);

  return (
    <>
      <MyHeader state={1} />
      <div className="homepage-feed">
        <StatusUpdate />
        <PostCard
          user={{ name: "John Doe", avatar: "/img/avt.png" }}
          time="2 hours ago"
          content="This is a sample post content."
          image="/img/post-img.jpg"
          likes={42}
          comments={12}
          shares={8}
        />
      </div>
    </>
  );
};

export default Index;
