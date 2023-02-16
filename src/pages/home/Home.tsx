import React, { useState } from 'react';
import { Button, Col, Image, Row, Space, Tag, Typography, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { PushpinFilled, CloseOutlined, HeartFilled, TwitterOutlined } from '@ant-design/icons';

import styles from './Home.module.scss';

const img_url =
  'https://images.unsplash.com/photo-1533973427779-4b8c2eb4c3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';

const { Text, Title } = Typography;

const Home: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: img_url,
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: img_url,
    },
  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }

    const img = new Image();
    img.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(img.outerHTML);
  };

  const renderUserNames = () => {
    return (
      <Col>
        <div className={styles.profile_title}>
          <Title level={3}>Mabelle, 30</Title>
        </div>
        <Text className={styles.profile_text}>
          <Space size={[0, 8]} wrap>
            <Tag icon={<PushpinFilled />} className={styles.profile_location}>
              Atlanta, USA
            </Tag>
          </Space>
        </Text>
      </Col>
    );
  };

  const renderAboutUser = () => {
    return (
      <Col>
        <Title className={styles.profile_title} level={4}>
          About
        </Title>
        <Text className={styles.about_text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Text>
      </Col>
    );
  };

  const renderUserInfo = () => {
    return (
      <Col>
        <Title className={styles.profile_title} level={4}>
          Mabelle's Info
        </Title>
        <Text className={styles.about_text}>
          <Space size={[0, 8]} wrap>
            <Tag icon={<TwitterOutlined />} color="#9c8aa5">
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#9c8aa5">
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#9c8aa5">
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#9c8aa5">
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#9c8aa5">
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#9c8aa5">
              Twitter
            </Tag>
          </Space>
        </Text>
      </Col>
    );
  };

  const renderUserInterests = () => {
    return (
      <Col>
        <Title className={styles.profile_title} level={4}>
          Interest
        </Title>
        <Text className={styles.about_text}>
          <Space size={[0, 8]} wrap>
            <Tag icon={<TwitterOutlined />} color="#9c8aa5">
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#9c8aa5">
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#9c8aa5">
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#9c8aa5">
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#9c8aa5">
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#9c8aa5">
              Twitter
            </Tag>
          </Space>
        </Text>
      </Col>
    );
  };

  const renderUserMainPhoto = () => {
    return (
      <Col span={24}>
        <Image src={img_url} />
        <Space className={styles.profile_buttons} size={48}>
          <Button className={styles.profile_reject} shape="circle" icon={<CloseOutlined />} size="large" />
          <Button className={styles.profile_like} shape="circle" icon={<HeartFilled />} size="large" />
        </Space>
      </Col>
    );
  };

  const renderUserPhotoUpload = () => {
    return (
      <Col span={18}>
        <ImgCrop rotate>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 3 && '+ Upload'}
          </Upload>
        </ImgCrop>
      </Col>
    );
  };

  return (
    <div className={styles.home_comp}>
      <Row gutter={[48, 48]}>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <Row justify="center" align="middle" className={styles.user_main_photo}>
            {renderUserMainPhoto()}
          </Row>

          <Row justify="center" align="middle" className={styles.user_photo_upload}>
            {renderUserPhotoUpload()}
          </Row>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Row className={styles.user_names}>{renderUserNames()}</Row>
          <Row className={styles.about_user}>{renderAboutUser()}</Row>
          <Row className={styles.user_info}>{renderUserInfo()}</Row>
          <Row className={styles.user_interests}>{renderUserInterests()}</Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
