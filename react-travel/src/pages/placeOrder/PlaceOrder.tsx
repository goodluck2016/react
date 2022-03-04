import React from 'react';
import styles from './PlaceOrder.module.css';
import { MainLayout } from '../../layouts/mainLayout';
import { Row, Col } from 'antd';
import { PaymentForm, CheckOutCard } from '../../components';

export const PlaceOrder: React.FC = (props) => {
  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          {/* <PaymentForm /> */}
        </Col>
        <Col span={12}>
          {/* <CheckOutCard /> */}
        </Col>
      </Row>
    </MainLayout>
  )
}