import { FunctionComponent } from 'react';
import { Button as AntdButton } from 'antd';

interface IButtonProps {
  className?: string;
  shape?: 'default' | 'circle' | 'round';
  type?: 'default' | 'link' | 'text' | 'ghost' | 'primary' | 'dashed' | undefined;
  size?: 'large' | 'middle' | 'small';
  icon?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
}

const Button: FunctionComponent<IButtonProps> = ({ ...restProps }) => {
  return <AntdButton {...restProps}></AntdButton>;
};

export default Button;
