import React, { useState } from 'react';
import { Col, Image, Select, Slider, Tag, TextArea, Text, Title, Radio, Row , Upload, HeartFilled } from '../../components/atoms';

import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

import type { SelectProps } from 'antd';

import styles from './editProfilePage.module.scss';

const img_url =
  'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=';

const text_area_value =
  'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.';

const EditProfilePage: React.FC = () => {
  const renderPhotos = () => {
    return (
      <Col lg={{ span: 19 }} md={{ span: 19 }}>
        <Image src={img_url} className={styles.my_profile_pic} />
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
      const image = Image({ src });
      const imgWindow = window.open(src);
      imgWindow?.document.write(image?.props.outerHTML);
    };

    return (
      <Col lg={{ span: 4, offset: 1 }} md={{ span: 4, offset: 1 }}>
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

  const renderAboutUser = () => {
    return (
      <Col span={24}>
        <Title level={4}>About</Title>
        <TextArea value={text_area_value} rows={3} maxLength={140} />
      </Col>
    );
  };

  const renderUserInterest = () => {
    const options = [
      { value: 'Movies' },
      { value: 'Writing' },
      { value: 'Singing' },
      { value: 'Music' },
      { value: 'Dancing' },
      { value: 'Food' },
    ];

    const tagRender = (props: CustomTagProps) => {
      const { label, closable, onClose } = props;
      const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
      };

      return (
        <Tag
          color="#923f78"
          onMouseDown={onPreventMouseDown}
          closable={closable}
          onClose={onClose}
          style={{ marginRight: 3 }}
          icon={<HeartFilled />}
        >
          {label}
        </Tag>
      );
    };

    return (
      <Col span={24}>
        <Title level={4}>Interests</Title>

        <Select
          mode="multiple"
          showArrow
          tagRender={tagRender}
          defaultValue={['Movies', 'Music']}
          style={{ width: '100%' }}
          options={options}
          size="large"
        />
      </Col>
    );
  };

  const renderUserInfo = () => {
    const options: SelectProps['options'] = [];

    for (let i = 120; i < 230; i++) {
      options.push({
        value: i + 'cm',
        label: i + ' cm',
      });
    }
    const handleChange = (value: string | string[]) => {
      console.log(`Selected: ${value}`);
    };

    return (
      <Col className="gutter-row" span={24}>
        <Title level={4}>Info</Title>
        <div className={styles.user_info_div}>
          <Row>
            <Text className={styles.user_info}>Gender</Text>
          </Row>
          <Row>
            <Radio.Group defaultValue="Man" className={styles.user_info_btns} buttonStyle="solid" size="large">
              <Radio.Button value="Man">Man</Radio.Button>
              <Radio.Button value="Woman">Woman</Radio.Button>
            </Radio.Group>
          </Row>
        </div>
        <div className={styles.user_info_div}>
          <Row>
            <Text className={styles.user_info}>Location</Text>
          </Row>
          <Row>
            <Radio.Group defaultValue="Man" className={styles.user_info_btns} buttonStyle="solid" size="large">
              <Radio.Button value="Man">Man</Radio.Button>
              <Radio.Button value="Woman">Woman</Radio.Button>
            </Radio.Group>
          </Row>
        </div>
        <div className={styles.user_info_div}>
          <Row>
            <Text className={styles.user_info}>Exercise</Text>
          </Row>
          <Row>
            <Radio.Group defaultValue="active" className={styles.user_info_btns} buttonStyle="solid" size="large">
              <Radio.Button value="active">Active</Radio.Button>
              <Radio.Button value="sometimes">Sometimes</Radio.Button>
              <Radio.Button value="never">Never</Radio.Button>
            </Radio.Group>
          </Row>
        </div>
        <div className={styles.user_info_div}>
          <Row>
            <Text className={styles.user_info}>Smoke</Text>
          </Row>
          <Row>
            <Radio.Group defaultValue="never" className={styles.user_info_btns} buttonStyle="solid" size="large">
              <Radio.Button value="socially">Socially</Radio.Button>
              <Radio.Button value="never">Never</Radio.Button>
              <Radio.Button value="regularly">Regularly</Radio.Button>
            </Radio.Group>
          </Row>
        </div>
        <div className={styles.user_info_div}>
          <Row>
            <Text className={styles.user_info}>Drink</Text>
          </Row>
          <Row>
            <Radio.Group defaultValue="socially" className={styles.user_info_btns} buttonStyle="solid" size="large">
              <Radio.Button value="socially">Socially</Radio.Button>
              <Radio.Button value="never">Never</Radio.Button>
              <Radio.Button value="regularly">Regularly</Radio.Button>
            </Radio.Group>
          </Row>
        </div>
        <div className={styles.user_info_div}>
          <Row>
            <Text className={styles.user_info}>Height</Text>
          </Row>
          <Row>
            <Select
              size="large"
              defaultValue="179cm"
              onChange={handleChange}
              style={{ width: 200 }}
              options={options}
            />
          </Row>
        </div>
        <div className={styles.user_info_div}>
          <Row>
            <Text className={styles.user_info}>Weight</Text>
          </Row>
          <Row>
            <Select size="large" defaultValue="67kg" onChange={handleChange} style={{ width: 200 }} options={options} />
          </Row>
        </div>
      </Col>
    );
  };

  const renderUserPreferences = () => {
    return (
      <Col className="gutter-row" span={24}>
        <Title level={4}>Preference</Title>
        <div className={styles.user_info_div}>
          <Row>
            <Text className={styles.user_info}>Interested in</Text>
          </Row>
          <Row>
            <Radio.Group defaultValue="Woman" className={styles.user_info_btns} buttonStyle="solid" size="large">
              <Radio.Button value="Man">Man</Radio.Button>
              <Radio.Button value="Woman">Woman</Radio.Button>
            </Radio.Group>
          </Row>
        </div>
        <div className={styles.user_info_div}>
          <Row>
            <Text className={styles.user_info}>Age Preference</Text>
          </Row>
          <Row>
            <Col span={24}>
              <Slider defaultValue={20} min={18} max={60} />
            </Col>
          </Row>
        </div>
        <div className={styles.user_info_div}>
          <Row>
            <Text className={styles.user_info}>Smoke</Text>
          </Row>
          <Row>
            <Radio.Group defaultValue="dm" className={styles.user_info_btns} buttonStyle="solid" size="large">
              <Radio.Button value="yes">Yes</Radio.Button>
              <Radio.Button value="no">No</Radio.Button>
              <Radio.Button value="dm">Doesn't Matter</Radio.Button>
            </Radio.Group>
          </Row>
        </div>
        <div className={styles.user_info_div}>
          <Row>
            <Text className={styles.user_info}>Drink</Text>
          </Row>
          <Row>
            <Radio.Group defaultValue="yes" className={styles.user_info_btns} buttonStyle="solid" size="large">
              <Radio.Button value="yes">Yes</Radio.Button>
              <Radio.Button value="no">No</Radio.Button>
              <Radio.Button value="dm">Doesn't Matter</Radio.Button>
            </Radio.Group>
          </Row>
        </div>
      </Col>
    );
  };

  return (
    <div className={styles.profile_edit_comp}>
      <Row gutter={[48, 48]}>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <Row>
            {renderPhotos()}
            {renderUploads()}
          </Row>
          <Row>{renderAboutUser()}</Row>
          <Row>{renderUserPreferences()}</Row>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Row gutter={[16, 24]}>{renderUserInfo()}</Row>
          <Row gutter={[16, 24]}>{renderUserInterest()}</Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
        </Col>
      </Row>
    </div>
  );
};

export default EditProfilePage;
