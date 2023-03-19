import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { MyCheckoutForm, PaymentCard } from '../../components/molecules';


const stripePromise = loadStripe("pk_test_j1KDptrekyBCv9mg6ud9VmHu00rPusU2MS");


function Payments() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCard />
    </Elements>
  );
}

export default Payments;
