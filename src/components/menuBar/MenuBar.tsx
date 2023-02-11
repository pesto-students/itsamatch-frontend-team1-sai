import React from "react";
import { Avatar, Menu, MenuProps, Layout, Space, Typography } from "antd";
import styles from "./menuBar.module.css";

import {
  HeartFilled,
  HistoryOutlined,
  MessageFilled,
  SettingFilled,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuBarOptions } from "../../utils";

const { Sider } = Layout;
const { Text, Title } = Typography;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  path?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    path,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(MenuBarOptions.PROFILE, "1", <UserOutlined />),
  getItem(MenuBarOptions.LIKES, "2", <HeartFilled />),
  getItem(MenuBarOptions.USERS, "3", <UsergroupAddOutlined />),
  getItem(MenuBarOptions.MATCHES, "4", <HistoryOutlined />),
  getItem(MenuBarOptions.MESSAGES, "5", <MessageFilled />),
  getItem(MenuBarOptions.SETTINGS, "6", <SettingFilled />),
];

const MenuBar = () => {
  const renderProfileImage = () => {
    return (
      <div className={styles.profile_image}>
        <Avatar
          size={175}
          src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis="
        />
        <Title className={styles.profile_title} level={4}>
          Floyd Miles, 35
        </Title>
        <Text className={styles.profile_text}>Complete my profile</Text>
      </div>
    );
  };

  const renderProfileStats = () => {
    return (
      <div className={styles.proifle_stats}>
        <div className="profile_friends">
          <Title className={styles.profile_count_title} level={4}>
            65
          </Title>
          <Text className={styles.profile_count_text}>Friends</Text>
        </div>
        <div className="profile_likes">
          <Title className={styles.profile_count_title} level={4}>
            65
          </Title>
          <Text className={styles.profile_count_text}>Likes</Text>
        </div>
        <div className="profile_matches">
          <Title className={styles.profile_count_title} level={4}>
            65
          </Title>
          <Text className={styles.profile_count_text}>Matches</Text>
        </div>
      </div>
    );
  };

  const renderMenuBar = () => {
    return (
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        className="menu-bar"
      />
    );
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className="sider-bar"
    >
      {renderProfileImage()}
      {renderProfileStats()}
      <Space></Space>
      {renderMenuBar()}
    </Sider>
  );
};

export default MenuBar;
