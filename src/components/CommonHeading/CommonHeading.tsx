import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title } = Typography;

interface CommonHeadingProps {
  title: string;
}

const CommonHeading: React.FC<CommonHeadingProps> = ({ title }) => {
  return (
    <>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={{ span: 16, offset: 8 }}
          lg={{ span: 16, offset: 8 }}
        >
          <Title level={3}>{title}</Title>
        </Col>
      </Row>
      <hr className="custom-hr" />
    </>
  );
};

export default CommonHeading;
