import './home.css';
import React from 'react';
import { Col, Row, Tabs } from 'antd';

import { ListView } from '../listView';
import { CommonHeading } from '../commonHeading';

const Home: React.FC = () => {
  return (
    <div className="home-comp">
      <CommonHeading title={'Hi! User'} />
      <Row>
        <Col md={{ span: 9, offset: 15 }}>
          <Tabs type="card" className="home-tabs">
            <Tabs.TabPane tab="Chats" key="chats">
              <ListView />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Request" key="requests">
              <ListView />
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
