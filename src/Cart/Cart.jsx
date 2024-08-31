import React, { useState, useEffect } from 'react';
import Footer_Two from '../Footer_Two/Footer_Two';
import { useNavigate } from 'react-router-dom';
import './Cart.css'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function Cart() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (location.state && location.state.cart) {
      const newCartItems = location.state.cart;
      setCartItems(prevCart => {
        const updatedCart = [...prevCart];
        newCartItems.forEach(item => {
          const existingProductIndex = updatedCart.findIndex(cartItem => cartItem.name === item.name);
          if (existingProductIndex >= 0) {
            // If product already exists in the cart, update quantity
            updatedCart[existingProductIndex] = { 
              ...updatedCart[existingProductIndex], 
              quantity: updatedCart[existingProductIndex].quantity + item.quantity 
            };
          } else {
            // Add new product to cart
            updatedCart.push(item);
          }
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      });
    }
  }, [location.state]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index] = { ...updatedCartItems[index], quantity: newQuantity };
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleRemoveItem = (index) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = prevCartItems.filter((_, itemIndex) => itemIndex !== index);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate('/checkout', {
      state: {
        cartItems: cartItems,
        subtotal: calculateSubtotal(),
        total: calculateSubtotal(), 
      }
    });
  };

  return (
    <div>
       <div className="coverCart">
  <img src="src\assets\2.jpg" alt="" />
 <h1>Cart</h1>
      </div>
       <div className="cartContainer">
        <div className="cart-content">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>Your cart is empty</td>
                </tr>
              ) : (
                cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>Rp. {item.price.toLocaleString()}</td>
                    <td>
                      <input
                        className='inputCart'
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                        style={{ width: '50px', height: '30px', padding: '5px', fontSize: '16px' }}
                      />
                    </td>
                    <td>Rp. {(item.price * item.quantity).toLocaleString()}</td>
                    <td>
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveItem(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="cart-totals">
            <h2>Cart Totals</h2>
            <div>
              Subtotal: Rp. <span className='Subtotal'>{calculateSubtotal().toLocaleString()}</span>
            </div>
            <div className="total-price">
              Total: Rp. <span className='Total'>{calculateSubtotal().toLocaleString()}</span>
            </div>
            <button className="check-out-button" onClick={handleCheckOut}>
              Check Out
            </button>
          </div>
        </div>
      </div> 
      <Footer_Two />
    </div>
  );
}

export default Cart;
