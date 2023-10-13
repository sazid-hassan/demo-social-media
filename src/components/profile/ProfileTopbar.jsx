import { Image } from "antd";
const ProfileTopBar = ({ img, name }) => {
  return (
    <div className="profile-topbar">
      <Image src={img} preview={false} alt="avatar" height={64} width={64} />
      <p>{name}</p>
    </div>
  );
};

export default ProfileTopBar;
