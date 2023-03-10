import { MatchCard } from '../../components/molecules';
import { Col, Row } from '../../components/atoms';

import styles from './matches.module.scss';

function Matches() {
  return (
    <div className={styles.matches_card_container}>
      {Array.apply(4).map((e, i) => (
        <Row key={i}>
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
