import styles from './likes.module.scss';
import { Col, Row } from '../../components/atoms';
import { LikeCard } from '../../components/molecules';

function Likes() {
  return (
    <div className={styles.likes_card_container}>
      {Array.apply(null, { length: 4 }).map((e, i) => (
        <Row>
          <Col span={8}>
            <LikeCard></LikeCard>
          </Col>
          <Col span={8}>
            <LikeCard></LikeCard>
          </Col>
          <Col span={8}>
            <LikeCard></LikeCard>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Likes;
