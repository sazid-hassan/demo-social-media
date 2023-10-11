import { Avatar } from "antd";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Avatar size={48} src="/path-to-avatar-image.jpg" />
      <h3>User Name</h3>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
      </ul>
    </div>
  );
};

export default Sidebar;
