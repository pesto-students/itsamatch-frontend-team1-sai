import { FunctionComponent } from 'react';
import cx from 'classnames';

import { Typography } from 'antd';

import styles from './typography.module.scss';

const { Title: AntdTitle } = Typography;

interface ITitleProps {
  className?: string;
  level: 1 | 2 | 5 | 3 | 4 | undefined;
  children: string | JSX.Element | JSX.Element[];
}

const Title: FunctionComponent<ITitleProps> = ({ className, level, children, ...restProps }) => {
  const titleClassName = cx(styles.title_class, className);
  return (
    <AntdTitle {...restProps} level={level} className={titleClassName}>
      {children}
    </AntdTitle>
  );
};

export default Title;
