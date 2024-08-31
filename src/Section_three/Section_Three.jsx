import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShareAlt, FaHeart } from 'react-icons/fa'; // Importing icons from react-icons
import './Section_three.css'
export default function Section_Three() {
  const [products, setProducts] = useState([]);  // Initialize state to hold product data
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);  // New state for quantity
  const navigate = useNavigate();

  // Fetch products from the API
  useEffect(() => {
    fetch('http://localhost:3000/products')  // Replace this URL with your JSON server URL
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // Find the index of the existing product in the cart
      const existingProductIndex = prevCart.findIndex((item) => item.name === product.name);

      let updatedCart;
      if (existingProductIndex >= 0) {
        // If the product exists, update the quantity
        updatedCart = prevCart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If the product doesn't exist, add it
        updatedCart = [...prevCart, { ...product, quantity }];
      }

      // Persist cart to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      return updatedCart; // Return the updated cart state
    });
  };

  const handleClick = () => {
    navigate('/shop');
    const timeOut = setTimeout(() => {
      scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }, 0);  // Immediately scroll to the top


  };

  return (
    <section className="sec_three">
      <h2>Our Products</h2>
      <div className="first">
        {products.slice(0, 4).map((product, index) => (
          <div className="first_img" key={index}>
            <img src={product.imgSrc} alt={product.name} />
            {product.discount && <span className="discount">{product.discount}</span>}
            {product.label && <span className="discount2">{product.label}</span>}
            <div className="overlay">
              <button onClick={() => handleAddToCart({ name: product.name, price: product.price })}>Buy Now</button>
              <div className="social-actions">
                <a href="#" className="share-link">
                  <FaShareAlt />
                  <span>Share</span>
                </a>
                <a href="#" className="like-link">
                  <FaHeart />
                  <span>Like</span>
                </a>
              </div>
            </div>
            <h3>{product.name}</h3>
            <h6>{product.description}</h6>
            <h4>
              Rp {product.price.toLocaleString()} {product.oldPrice && <span className="edit">Rp {product.oldPrice.toLocaleString()}</span>}
            </h4>
            <br />
          </div>
        ))}
      </div>

      <div className="second">
        {products.slice(4).map((product, index) => (
          <div className="first_img" key={index}>
            <img src={product.imgSrc} alt={product.name} />
            {product.discount && <span className="discount">{product.discount}</span>}
            {product.label && <span className="discount2">{product.label}</span>}
            <div className="overlay">
              <button onClick={() => handleAddToCart({ name: product.name, price: product.price })}>Buy Now</button>
              <div className="social-actions">
                <a href="#" className="share-link">
                  <FaShareAlt />
                  <span>Share</span>
                </a>
                <a href="#" className="like-link">
                  <FaHeart />
                  <span>Like</span>
                </a>
              </div>
            </div>
            <h3>{product.name}</h3>
            <h6>{product.description}</h6>
            <h4>
              Rp {product.price.toLocaleString()} {product.oldPrice && <span className="edit">Rp {product.oldPrice.toLocaleString()}</span>}
            </h4>
            <br />
          </div>
        ))}
      </div>

      <button className="btn" onClick={handleClick}>Show More</button>
    </section>
  );
}
