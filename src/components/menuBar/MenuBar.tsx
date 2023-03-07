import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Layout } from '../atoms';
import { MenuProps } from 'antd';
import { Avatar, Text, Title } from '../../components/atoms';
import styles from './MenuBar.module.scss';

import {
  HeartOutlined,
  HistoryOutlined,
  MessageOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { MenuBarOptions } from '../../utils';

const { Sider } = Layout;

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

const img_url =
  'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=';

const MenuBar = () => {
  const renderProfileImage = () => {
    let navigate = useNavigate();

    const handleClick = () => {
      navigate('/editmyprofile');
    };

    return (
      <div className={styles.my_profile_image_container}>
        <Avatar size={200} src={img_url} />
        <Title level={4}>Floyd Miles, 35</Title>
        <Text className={styles.my_profile_text} onClick={handleClick}>
          Complete my profile
        </Text>
      </div>
    );
  };

  const renderProfileStats = () => {
    return (
      <div className={styles.my_profile_stats}>
        <div className={styles.profile_friends}>
          <Title className={styles.my_profile_count_title} level={4}>
            65
          </Title>
          <Text className={styles.my_profile_count_text}>Friends</Text>
        </div>
        <div className={styles.profile_likes}>
          <Title className={styles.my_profile_count_title} level={4}>
            65
          </Title>
          <Text className={styles.my_profile_count_text}>Likes</Text>
        </div>
        <div className={styles.profile_matches}>
          <Title className={styles.my_profile_count_title} level={4}>
            65
          </Title>
          <Text className={styles.my_profile_count_text}>Matches</Text>
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
        <Menu
          defaultSelectedKeys={[current]}
          mode="inline"
          items={items}
          className={styles.menu_bar}
          onClick={handleClick}
        />
      </>
    );
  };

  return (
    <Sider
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className={styles.sider_bar}
      trigger={null}
      style={{height: '100vh'}}
    >
      {renderProfileImage()}
      {renderProfileStats()}
      {renderMenuBar()}
    </Sider>
  );
};

export default MenuBar;
