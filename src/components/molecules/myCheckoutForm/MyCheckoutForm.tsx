import axios from "axios";
import { useState } from "react";
import StripeCheckout from 'react-stripe-checkout';


const MyCheckoutForm = () => {
  const publishableKey =
    'pk_test_j1KDptrekyBCv9mg6ud9VmHu00rPusU2MS';
  const [product, setProduct] = useState({
    name: 'Premium',
    price: 5,
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
    <div className="container">
    <h2>Complete React & Stripe payment integration</h2>
    <p>
      <span>Product: </span>
      {product.name}
    </p>
    <p>
      <span>Price: </span>Rs {product.price}
    </p>
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
  </div>
  );
};

export default MyCheckoutForm;
