import React from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol ,faHeadset,faShippingFast,faShieldAlt    } from '@fortawesome/free-solid-svg-icons';
import './Footer_Two.css'
export default function 
() {
  function useDisableScroll(isDisabled) {
    useEffect(() => {
      if (isDisabled) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
  
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isDisabled]);
  }
  return (
   
<div className="features">
  <div className="feature">
    <FontAwesomeIcon  className='icoon' icon={faFutbol } />
    <div className="text-container">
      <h3>High Quality</h3>
      <p>Crafted from top materials</p>
    </div>
  </div>
  <div className="feature">
    <FontAwesomeIcon className='icoon' icon={faShieldAlt } />
    <div className="text-container">
      <h3>Warranty Protection</h3>
      <p>Over 2 years</p>
    </div>
  </div>
  <div className="feature">
    <FontAwesomeIcon  className='icoon' icon={faShippingFast } />
    <div className="text-container">
      <h3>Free Shipping</h3>
      <p>Order over 150 $</p>
    </div>
  </div>
  <div className="feature">
    <FontAwesomeIcon  className='icoon' icon={faHeadset } />
    <div className="text-container">
      <h3>24 / 7 Support</h3>
      <p>Dedicated support</p>
    </div>
  </div>

    </div>
  )
}
