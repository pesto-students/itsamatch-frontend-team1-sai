// import React, { FunctionComponent } from 'react';
// import { Tag as AntdTag } from 'antd';
// import { FacebookOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';

// interface ITagProps {
//   className?: string;
//   icon?: React.ReactNode;
//   children?: React.ReactNode;
//   color?: string;
// }

// const iconMap = {
//   facebook: <FacebookOutlined />,
//   linkedin: <LinkedinOutlined />,
//   twitter: <TwitterOutlined />,
//   youtube: <YoutubeOutlined />,
// };

// const Tag: FunctionComponent<ITagProps> = ({ className, icon, children, ...restProps }) => {
//   return (
//     <AntdTag {...restProps} icon={icon} className={className}>
//       {children}
//     </AntdTag>
//   );
// };

// export default Tag;

import { Tag } from 'antd';

export default Tag;
