import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Menu, MenuProps, Layout, Space } from "antd";
const { Sider } = Layout;

import "./menuBar.css";

import {
  HeartFilled,
  HistoryOutlined,
  MessageFilled,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dating", "1", <HeartFilled />),
  getItem("Users", "2", <UsergroupAddOutlined />),
  getItem("Messages", "3", <MessageFilled />),
  getItem("Activity", "4", <HistoryOutlined />),
  getItem("Profile", "5", <UserOutlined />),
];


const MenuBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }


  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className='sider-bar'
    >
      <div
        onClick={handleClick}
        style={{
          height: 32,
          margin: 16,
          color: "black",
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          borderBottom: '1px solid black'
        }}
      >
          <Space>
        </Space>
       Home

      </div>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        className="menu-bar"
      />
    </Sider>
  );
};

export default MenuBar;
