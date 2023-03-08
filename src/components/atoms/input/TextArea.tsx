import { FunctionComponent } from 'react';

import { Input } from 'antd';
const { TextArea: AntdTextArea } = Input;

interface ITextAreaProps {
  className?: string;
  rows?: number;
  maxLength?: number;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  autoSize?: boolean | {};
  children?: string | JSX.Element | JSX.Element[];
}

const TextArea: FunctionComponent<ITextAreaProps> = ({ ...restProps }) => {
  return <AntdTextArea {...restProps} />;
};

export default TextArea;
