import { FunctionComponent } from 'react';
import { Image as AntdImage } from 'antd';

interface IImageProps {
  className?: string;
  src: string;
  width?: string;
  height?: string;
}

const Image: FunctionComponent<IImageProps> = ({ className, src, ...restProps }) => {
  return <AntdImage {...restProps} src={src} className={className} />;
};

export default Image;
