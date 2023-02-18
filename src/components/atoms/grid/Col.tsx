import React, { FunctionComponent } from 'react';
import { Col as AntdCol } from 'antd';

interface IColProps {
  className?: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  flex?: string;
  children?: React.ReactNode;
  span?: number;
}

const Col: FunctionComponent<IColProps> = ({ className, children, ...restProps }) => {
  return (
    <AntdCol {...restProps} className={className}>
      {children}
    </AntdCol>
  );
};

export default Col;
