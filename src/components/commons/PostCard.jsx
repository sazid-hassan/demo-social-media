import React, { useState } from "react";
import { Avatar, Image } from "antd";
import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import ReactionSection from "./ReactSection";

const PostCard = ({ user, time, content, image, likes, comments, shares }) => {
  const [showReactionSection, setShowReactionSection] = useState(false);

  console.log(showReactionSection);
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
        {image && (
          <Image src={image} alt={"post image"} className="post-image" />
        )}
      </div>
      <div className="post-actions">
        <div className="post-action">
          <div
            className="like-button"
            onMouseEnter={() => setShowReactionSection(true)}
            onMouseLeave={() => setShowReactionSection(false)}
            onClick={(e) => {
              e.stopPropagation();
              setShowReactionSection(!showReactionSection);
            }}
          >
            <AiOutlineLike /> {likes}
          </div>
        </div>
        <div className="post-action">
          <AiOutlineComment /> {comments}
        </div>
        <div className="post-action">
          <AiOutlineShareAlt /> {shares}
        </div>
      </div>
      {showReactionSection && <ReactionSection />}
    </div>
  );
};

export default PostCard;
