import React, { useState } from 'react';
import { Button, Col, Image, Text, Tag, Title, Space, Row } from '../../components/atoms';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { CloseOutlined, HeartFilled, TwitterOutlined } from '@ant-design/icons';

import styles from './Home.module.scss';

const img_url =
  'https://images.unsplash.com/photo-1533973427779-4b8c2eb4c3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';

const Home: React.FC = () => {
  const renderPhotos = () => {
    return (
      <Col span={24}>
        <Image src={img_url} className={styles.user_main_photo} />
        <Space className={styles.profile_buttons} size={48}>
          <Button className={styles.profile_reject} shape="circle" icon={<CloseOutlined />} size="large" />
          <Button className={styles.profile_like} shape="circle" icon={<HeartFilled />} size="large" />
        </Space>
      </Col>
    );
  };

  const renderUploads = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([
      {
        uid: '-1',
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
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
    };

    return (
      <Col>
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

  const renderUserNames = () => {
    return (
      <>
        <Col>
          <Title level={3}>Mabelle, 30</Title>
          <Tag icon="twitter " className={styles.profile_location}>
            Atlanta, USA
          </Tag>
        </Col>
      </>
    );
  };

  const renderAboutUser = () => {
    return (
      <Col>
        <Title level={4}>About</Title>
        <Text className={styles.user_profile_text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Text>
      </Col>
    );
  };

  const renderUserInfo = () => {
    return (
      <Col>
        <Title level={4}>Mabelle's Info</Title>
        <Text className={styles.user_profile_text}>
          <Space size={[0, 8]} wrap>
            <Tag icon={<TwitterOutlined />} className={styles.user_tags}>
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} className={styles.user_tags}>
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} className={styles.user_tags}>
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} className={styles.user_tags}>
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} className={styles.user_tags}>
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} className={styles.user_tags}>
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
        <Title className="profile_title" level={4}>
          Interest
        </Title>
        <Text className={styles.user_profile_text}>
          <Space size={[0, 8]} wrap>
            <Tag icon={<TwitterOutlined />} className={styles.user_tags}>
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} className={styles.user_tags}>
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} className={styles.user_tags}>
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} className={styles.user_tags}>
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} className={styles.user_tags}>
              Twitter
            </Tag>
            <Tag icon={<TwitterOutlined />} className={styles.user_tags}>
              Twitter
            </Tag>
          </Space>
        </Text>
      </Col>
    );
  };

  return (
    <div className={styles.home_comp}>
      <Row gutter={[48, 48]}>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <Row justify="center" align="middle">
            {renderPhotos()}
          </Row>
          <Row justify="center" align="middle">
            {renderUploads()}
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
