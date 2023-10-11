import React from "react";
import { Avatar } from "antd";
import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";

const PostCard = ({ user, time, content, image, likes, comments, shares }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <Avatar size={40} src={user.avatar} />
        <div className="post-info">
          <strong>{user.name}</strong>
          <span className="post-time">{time}</span>
        </div>
      </div>
      <p className="post-content">{content}</p>
      <div className="img-body">
        {image && <img src={image} alt="Post" className="post-image" />}
      </div>
      <div className="post-actions">
        <div className="post-action">
          <AiOutlineLike /> {likes}
        </div>
        <div className="post-action">
          <AiOutlineComment /> {comments}
        </div>
        <div className="post-action">
          <AiOutlineShareAlt /> {shares}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
