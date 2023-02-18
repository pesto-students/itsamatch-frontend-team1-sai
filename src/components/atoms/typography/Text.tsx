import { FunctionComponent } from 'react';
import { Typography } from 'antd';
import { BaseType } from 'antd/es/typography/Base';

import cx from 'classnames';
import styles from './typography.module.scss';

const { Text: AntdText } = Typography;

interface ITextProps {
  className?: string;
  type?: BaseType | undefined;
  children: string | JSX.Element | JSX.Element[];
}

const Text: FunctionComponent<ITextProps> = ({ className, type, children, ...restProps }) => {
  const titleClassName = cx(styles.profile_text, className);
  return (
    <AntdText {...restProps} type={type} className={titleClassName}>
      {children}
    </AntdText>
  );
};

export default Text;
