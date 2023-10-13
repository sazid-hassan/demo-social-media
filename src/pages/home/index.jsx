import MyHeader from "@/components/commons/MyHeader";
import PostCard from "@/components/commons/PostCard";
import StatusUpdate from "@/components/home/StatusUpdate";
import { withAuth } from "@/configs/withAuth";
import { showSidebar } from "@/redux-store/slices/sidebarSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(showSidebar());
  }, [posts]);

  console.log(posts);

  return (
    <>
      <MyHeader state={1} />
      <div className="homepage-feed">
        <StatusUpdate />
        {posts
          .slice()
          .reverse()
          .map((d, i) => (
            <PostCard
              key={i}
              user={{ name: "Jane Dee", avatar: "/img/avt-2.png" }}
              time={d.time}
              content={d.post}
              likes={0}
              comments={0}
              shares={0}
            />
          ))}

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

export default withAuth(Index);
