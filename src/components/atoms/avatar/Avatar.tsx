import React, { FunctionComponent } from 'react';
import { Avatar as AntdAvatar } from 'antd';

interface IAvatarProps {
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
  icon?: React.ReactNode;
  size?: number | 'large' | 'small' | 'default' | { xs: number; sm: number; lg: number; md: number };
  shape?: 'circle' | 'square';
  src?: 'string' | React.ReactNode;
}

const Avatar: FunctionComponent<IAvatarProps> = ({ ...restProps }) => {
  return <AntdAvatar {...restProps} />;
};

export default Avatar;
