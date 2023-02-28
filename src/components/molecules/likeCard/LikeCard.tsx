import { FunctionComponent } from 'react';
import {
  Card,
  PushpinFilled,
  Tag,
  Title,
  Button,
  Space,
  CloseOutlined,
  HeartFilled,
  MessageOutlined,
} from '../../atoms';

import styles from './likeCard.module.scss';

const { Meta } = Card;

const LikeCard: FunctionComponent = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1533973427779-4b8c2eb4c3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';

  return (
    <div className={styles.like_card}>
      <Card cover={<img alt="example" src={imageUrl} />}>
        <div className={styles.like_card_body}>
          <div>
            <Meta
              title={<Title level={4}>Girl,25 </Title>}
              description={
                <Tag icon={<PushpinFilled />} className={styles.profile_location}>
                  Atlanta, USA
                </Tag>
              }
            />
          </div>

          <div>
            <Space size={12}>
              <Button className={styles.profile_reject} shape="circle" icon={<CloseOutlined />} size="large" />
              <Button className={styles.profile_message} shape="circle" icon={<HeartFilled />} size="large" />
            </Space>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LikeCard;
