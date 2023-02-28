import { MatchCard } from '../../components/molecules';
import { Col, Row } from '../../components/atoms';

import styles from './matches.module.scss';

function Matches() {
  return (
    <div className={styles.matches_card_container}>
      {Array.apply(null, { length: 4 }).map((e, i) => (
        <Row key={i} gutter={48}>
          <Col span={8}>
            <MatchCard></MatchCard>
          </Col>
          <Col span={8}>
            <MatchCard></MatchCard>
          </Col>
          <Col span={8}>
            <MatchCard></MatchCard>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Matches;
