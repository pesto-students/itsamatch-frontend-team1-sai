import React, { FunctionComponent } from 'react';
import { Row as AntdRow } from 'antd';

interface IRowProps {
  className?: string;
  align?: 'top' | 'middle' | 'bottom' | 'stretch';
  gutter?: number | [number, number];
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
  wrap?: boolean;
  children?: string | JSX.Element | JSX.Element[];
}

const Row: FunctionComponent<IRowProps> = ({ className, children, ...restProps }) => {
  return (
    <AntdRow {...restProps} className={className}>
      {children}
    </AntdRow>
  );
};

export default Row;
