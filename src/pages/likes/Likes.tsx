import { LikeCard } from '../../components/molecules';
import { Col, Row } from '../../components/atoms';

import styles from './likes.module.scss';

function Likes() {
  return (
    <div className={styles.likes_card_container}>
      {Array.apply(null, { length: 4 }).map((e, i) => (
        <Row key={i} gutter={48}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <LikeCard></LikeCard>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <LikeCard></LikeCard>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <LikeCard></LikeCard>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Likes;
