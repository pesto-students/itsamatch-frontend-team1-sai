import { List } from 'antd';
import React, { useState } from 'react';
import { Avatar, Button, Card, StarOutlined } from '../../atoms';
import styles from './payment.module.scss';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const PaymentCard: React.FC = () => {



  const publishableKey =
    'pk_test_j1KDptrekyBCv9mg6ud9VmHu00rPusU2MS';
  const [product, setProduct] = useState({
    name: 'Premium',
    price: 500,
  });

  const priceForStripe = product.price * 100;


  const handleSuccess = () => {
    alert('Payment was successful')
  };
  const handleFailure = () => {
    alert('Payment was not successful')
  };

  const payNow = async (token: any) => {
    try {
      const response = await axios({
        url: 'http://localhost:9000/stripe_payments/create_payment',
        method: 'post',
        data: {
          amount: product.price * 100,
          token,
          // TODO:- Update the userId 
          userId: 'userId123'
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  return (
    <Card title="Unlock Premium Features" className={styles.payment_card}>
      <Card>
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={{ xs: 24, sm: 32, md: 64, lg: 64 }} src={<StarOutlined />} />}
              title={'Unlimited access to view recommended profile'}
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={{ xs: 24, sm: 32, md: 64, lg: 64 }} src={<StarOutlined />} />}
              title={'Unlimited access to view the profiles that liked you'}
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={{ xs: 24, sm: 32, md: 64, lg: 64 }} src={<StarOutlined />} />}
              title={'Unlimited access to view matches'}
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={{ xs: 24, sm: 32, md: 64, lg: 64 }} src={<StarOutlined />} />}
              title={'Unlimited access to message your matches'}
            />
          </List.Item>
          <List.Item>
            <StripeCheckout
              stripeKey={publishableKey}
              label="Pay Now"
              currency="INR"
              name="Pay With Credit Card"
              billingAddress
              shippingAddress
              amount={priceForStripe}
              description={`Your total is $${product.price}`}
              token={payNow}
              />
          </List.Item>
        </List>
      </Card>
    </Card>
  );
};

export default PaymentCard;
