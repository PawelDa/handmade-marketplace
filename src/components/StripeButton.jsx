import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 1000;
  const publishableKey = 'pk_test_51JWS70EEIqeIzoDvkEA6UJTBShniBCfevS37DQfSZJcpC8OgSgdqYskBHvgJ9HatpgxAqqlbkilMilbDErMaUHZM00ZNLDMKpt';

  const onToken = token => {
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='My company'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
