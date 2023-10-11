import { AiOutlineLike, AiFillHeart } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";

const ReactionSection = () => {
  return (
    <div className="reaction-section">
      <div className="reaction-icon">
        <AiOutlineLike />
        <span>Like</span>
      </div>
      <div className="reaction-icon">
        <AiFillHeart />
        <span>Love</span>
      </div>
      <div className="reaction-icon">
        <BsFillEmojiLaughingFill />
        <span>Haha</span>
      </div>
    </div>
  );
};

export default ReactionSection;
