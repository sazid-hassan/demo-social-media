import MyHeader from "@/components/commons/MyHeader";
import PostCard from "@/components/commons/PostCard";
import StatusUpdate from "@/components/home/StatusUpdate";
import ProfileTopBar from "@/components/profile/ProfileTopbar";
import { withAuth } from "@/configs/withAuth";
import { useSelector } from "react-redux";

const Index = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      <MyHeader state={2} />
      <ProfileTopBar img={"/img/avt-2.png"} name={"Jane Dee"} />
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
    </>
  );
};

export default withAuth(Index);
