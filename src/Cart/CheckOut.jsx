import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CheckOut.css'
function CheckOut() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [countryRegion, setCountryRegion] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [townCity, setTownCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [additionalInformation, setAdditionalInformation] = useState('');
  const location = useLocation();
  const { cartItems, subtotal, total } = location.state || {};
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { firstName, lastName, companyName, countryRegion,streetAddress,
      townCity,province,zipCode,phone,email,additionalInformation,});
    if (!firstName || !lastName || !streetAddress || !townCity || !zipCode || !phone || !email) {
      alert('Please fill out all required fields.');

      return;
    }

  };
  

  return (   <div className="checkout-container">
      
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Billing details</h2>

      <div className="name-container">
        <div className="form-group ">
          <label htmlFor="firstName">First Name</label>
          <input className='ll'
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group half-width">
          <label htmlFor="lastName">Last Name</label>
          <input className='ll'
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="companyName">Company Name (Optional)</label>
        <input className='ll'
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="countryRegion">Country/Region</label>
        <select className='ll'
          id="countryRegion"
          value={countryRegion}
          onChange={(e) => setCountryRegion(e.target.value)}
        >
          <option value="">Select Country/Region</option>
          <option value="Sri Lanka">Sri Lanka</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="streetAddress">Street address</label>
        <input className='ll'
          type="text"
          id="streetAddress"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="townCity">Town/City</label>
        <input className='ll'
          type="text"
          id="townCity"
          value={townCity}
          onChange={(e) => setTownCity(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="province">Province</label>
        <select className='ll'
          id="province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        >
          <option value="">Select Province</option>
          <option value="Western Province">Western Province</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="zipCode">ZIP code</label>
        <input className='ll'
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input className='ll'
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="additionalInformation">Additional Information</label>
        <textarea className='ll'
          id="additionalInformation"
          value={additionalInformation}
          onChange={(e) => setAdditionalInformation(e.target.value)}
        />
      </div>
    </form>

    <div className="checkout-summary">
      <h2>Product</h2>
      <div>
        {cartItems && cartItems.length > 0 ? (
          <>
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <span>{item.name} x {item.quantity}</span>
                  <span>Rp. {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="subtotal">
              <span>Subtotal</span>
              <span>Rp. {subtotal.toLocaleString()}</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span className="total-amount">Rp. {total.toLocaleString()}</span>
              <hr />
            </div>
          </>
        ) : (
          <p>No items in the cart for checkout.</p>
        )}
      </div>
      <div className="payment-options">
        <h3>Payment Options</h3>
        <div className="payment-method">
          <div className="radio-label1">
            <input type="radio" name="payment" id="directBankTransfer" defaultChecked />
            <label htmlFor="directBankTransfer">Direct Bank Transfer</label>
          </div>
          <p className="payment-description">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference.
            Your order will not be shipped until the funds have cleared in our account.
          </p>
        </div>

        <div className="payment-method">
          <div className="radio-label">
            <input type="radio" name="payment" id="cashOnDelivery" />
            <label htmlFor="cashOnDelivery">Cash On Delivery</label>
          </div>
        </div>
      </div>
      <p className="privacy-policy">
        Your personal data will be used to support your experience throughout this website, to manage access to your account,
        and for other purposes described in our <a href="#">privacy policy</a>.
      </p>
      <button type="submit" form="checkout-form" className="place-order-button"  onClick={handleSubmit}>Place order</button>
    </div>
  </div>
 

  );
}

export default CheckOut;