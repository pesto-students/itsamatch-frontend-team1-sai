import { MatchCard } from '../../components/molecules';
import { Col, Row } from '../../components/atoms';

import styles from './matches.module.scss';
import axios from 'axios';
import { useEffect } from 'react';

function Matches() {


  const fetchingData = async() => {
    const data = await axios.get('http://localhost:9000/matches')

    console.log(data)

    return data;
  }


  useEffect(()=>{
    console.log("eeeeeeeeeeeeee")
    fetchingData()
  }, []) 

  return (
    <div className={styles.matches_card_container}>
      {Array.apply(null, { length: 4 }).map((e, i) => (
        <Row key={i} gutter={48}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <MatchCard></MatchCard>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <MatchCard></MatchCard>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <MatchCard></MatchCard>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Matches;
