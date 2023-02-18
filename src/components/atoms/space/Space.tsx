import { FunctionComponent } from 'react';
import { Space as AntdSpace } from 'antd';

interface ISpaceProps {
  className?: string;
  wrap?: boolean;
  size?: 'small' | 'middle' | 'large' | number | [number, number];
  children?: string | JSX.Element | JSX.Element[];
}

const Space: FunctionComponent<ISpaceProps> = ({ ...restProps }) => {
  return <AntdSpace {...restProps}></AntdSpace>;
};

export default Space;
