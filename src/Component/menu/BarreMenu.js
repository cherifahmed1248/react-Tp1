import React from "react";
import { Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
function BarreMenu() {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
      <Menu.Item key="1">
        <UserOutlined />
        <span className="nav-text">Home</span>
      </Menu.Item>
      <Menu.Item key="2">
        <VideoCameraOutlined />
        <span className="nav-text">Results</span>
      </Menu.Item>
      <Menu.Item key="3">
        <UploadOutlined />
        <span className="nav-text">Clubs</span>
      </Menu.Item>
      <Menu.Item key="4">
        <UserOutlined />
        <span className="nav-text">Players</span>
      </Menu.Item>
    </Menu>
  );
}
export default BarreMenu;
