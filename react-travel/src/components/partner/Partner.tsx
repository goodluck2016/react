import React from 'react';
import styles from './Partner.module.css';
import { Divider, Typography, Row, Col } from 'antd';
import image1 from '../../assets/images/facebook-807588_640.png';
import image2 from '../../assets/images/follow-826033_640.png';
import image3 from '../../assets/images/microsoft-80658_640.png';

export const Partner: React.FC = () => {
    return (
      <div className={styles.partner}>
        <Divider orientation='left'>
          <Typography.Title level={3} type='warning'>
            合作伙伴
          </Typography.Title>
        </Divider>        
        <div className={styles.inner}>
          <Row>
            <Col span={8}>
              <img className={styles.image} src={image1} alt='' />
            </Col>
            <Col span={8}>
              <img className={styles.image} src={image2} alt='' />
            </Col>
            <Col span={8}>
              <img className={styles.image} src={image3} alt='' />
            </Col>
          </Row>
        </div>
      </div>
    );
  }