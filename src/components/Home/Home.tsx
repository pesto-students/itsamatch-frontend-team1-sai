import "./Home.css";
import React from "react";
import TitleHeading from "../CommonHeading";
import ListView from "../ListView";
import { Col, Row, Tabs } from "antd";

const Home: React.FC = () => {
  return (
    <div className="home-comp">
      <TitleHeading title={"Hi! User"} />
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
