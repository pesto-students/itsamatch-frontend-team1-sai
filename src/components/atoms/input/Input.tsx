import { FunctionComponent } from 'react';
import { Input as AntdInput } from 'antd';

interface IInputProps {
  className?: string;
  type?: string;
  size?: 'large' | 'middle' | 'small';
  placeholder?: string;
}

const Input: FunctionComponent<IInputProps> = ({ ...restProps }) => {
  return <AntdInput {...restProps} />;
};

export default Input;
