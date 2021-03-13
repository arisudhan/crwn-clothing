import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../assets/4.4 crown.svg";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = 100 * price;
  const publishableKey =
    "pk_test_51IUUSeKThAlTPxHUXon6l6ewpJh1ofV1rXW8ShMonuu7EHXHE7uC4t6bQ4eNI4jr3GU8rP2Qc74PHn4jDP8GPtBc00S9hkuNjv";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLOTHING LTD"
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
