import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "@/redux-store/slices/postSlice";

const StatusUpdate = () => {
  const [post, setPost] = useState("");

  const dispatch = useDispatch();

  const submitPost = () => {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, "0");
    const minutes = String(currentTime.getMinutes()).padStart(2, "0");
    const seconds = String(currentTime.getSeconds()).padStart(2, "0");
    const time = `${hours}:${minutes}:${seconds}`;

    const postData = {
      time: time,
      post: post,
    };

    dispatch(addPost(postData));
    setPost("");
  };

  return (
    <div className="status-update">
      <textarea
        onChange={(e) => setPost(e.target.value)}
        placeholder="What's on your mind?"
        value={post}
      ></textarea>
      <button onClick={submitPost}>Post</button>
    </div>
  );
};

export default StatusUpdate;
