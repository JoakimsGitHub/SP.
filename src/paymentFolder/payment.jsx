import React from "react";

function Payment({ subscribe, handleSubscription }) {
  return (
    <div className="payment">
      <p>Payment: </p>
      <div>
        <select value={subscribe} onChange={handleSubscription}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
      </div>
    </div>
  );
}

export default Payment;
