import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Menu } from 'antd';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    label: 'Login',
    key: '/login',
    icon: <LoginOutlined />,
  },
  {
    label: 'Register',
    key: '/register',
    icon: <UserAddOutlined />,
  },
];

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState('');
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default NavBar;
