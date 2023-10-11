import { Avatar } from "antd";

const Sidebar = ({ submenus }) => {
  return (
    <div className="sidebar">
      {!submenus ? (
        <>
          <div className="user">
            <Avatar size={36} src="/img/avt-2.png" />
            <h3>Jane Dee</h3>
          </div>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
          </ul>
        </>
      ) : (
        <>
          <p>Secondary Sidebar</p>
        </>
      )}
    </div>
  );
};

export default Sidebar;
