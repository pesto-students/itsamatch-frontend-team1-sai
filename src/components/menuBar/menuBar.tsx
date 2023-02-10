import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Avatar, Layout, Menu, MenuProps, Space, Typography } from 'antd';
import {
  HeartOutlined,
  HistoryOutlined,
  MessageOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './menuBar.css';
import { MenuBarOptions } from '../../utils';

const { Sider } = Layout;
const { Text, Title } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

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
  getItem(MenuBarOptions.PROFILE, '/profile', <UserOutlined />),
  getItem(MenuBarOptions.LIKES, '/likes', <HeartOutlined />),
  getItem(MenuBarOptions.USERS, '/', <UsergroupAddOutlined />),
  getItem(MenuBarOptions.MATCHES, '/matches', <HistoryOutlined />),
  getItem(MenuBarOptions.MESSAGES, '/messages', <MessageOutlined />),
  getItem(MenuBarOptions.SETTINGS, '/settings', <SettingOutlined />),
];

const MenuBar = () => {
  const renderProfileImage = () => {
    return (
      <div className="profile_image">
        <Avatar
          size={175}
          src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis="
        />
        <Title className="profile_title" level={4}>
          Floyd Miles, 35
        </Title>
        <Text className="profile_text">Complete my profile</Text>
      </div>
    );
  };

  const renderProfileStats = () => {
    return (
      <div className="proifle_counts">
        <div className="profile_friends">
          <Title className="profile_count_title" level={4}>
            65
          </Title>
          <Text className="profile_count_text">Friends</Text>
        </div>
        <div className="profile_likes">
          <Title className="profile_count_title" level={4}>
            65
          </Title>
          <Text className="profile_count_text">Likes</Text>
        </div>
        <div className="profile_matches">
          <Title className="profile_count_title" level={4}>
            65
          </Title>
          <Text className="profile_count_text">Matches</Text>
        </div>
      </div>
    );
  };

  const renderMenuBar = () => {
    const [current, setCurrent] = useState('/');
    const navigate = useNavigate();

    const handleClick: MenuProps['onClick'] = (e) => {
      setCurrent(e.key);
      navigate(e.key);
    };

    return (
      <>
        <Menu defaultSelectedKeys={[current]} mode="inline" items={items} className="menu-bar" onClick={handleClick} />
      </>
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
