import React, { useState } from 'react';
import { FaShareAlt, FaHeart } from 'react-icons/fa'; // Importing icons from react-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer_Two from '../Footer_Two/Footer_Two';
import './Shop.css'
export default function Shop() {
  const products = [
    {
      name: 'Syltherine',description: 'Stylish cafe chair', price: 2500000,oldPrice: 3500000, imgSrc: 'src/assets/image 1.png',discount: '-30%' },
    {
      name: 'Pingky',description: 'Cute bed set',price: 7000000,oldPrice: null,imgSrc: 'src/assets/Rectangle 43.png', discount: null,
    },
    { name: 'Lolito',description: 'Luxury big sofa',price: 7000000, oldPrice: 14000000, imgSrc: 'src/assets/image 3.png',discount: '-30%',
    },
    {name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, oldPrice: null, imgSrc: 'src/assets/image 4.png',discount: 'New',
    },
    {name: 'Grifo',description: 'Night lamp', price: 1500000,oldPrice: null, imgSrc: 'src/assets/image 9.png',discount: null,
    },
    {name: 'Muggo', description: 'Small mug', price: 150000, oldPrice: null, imgSrc: 'src/assets/image 6.png',discount: 'New',
    },
    {name: 'Pingky',description: 'Cute bed set',price: 7000000,oldPrice: 14000000,imgSrc: 'src/assets/image 7.png',discount: '-30%',
    },
    {name: 'Potty',description: 'Minimalist flower pot',price: 500000,oldPrice: null,imgSrc: 'src/assets/Featured Products.png',discount: 'New',}
  ];
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1); 
  
    const handleAddToCart = (product) => {
      setCart((prevCart) => {
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
   
  return (

    <div className="div">
 <div className="coverr">
 <img src="src\assets\2.jpg" alt="" />
 <h1>Shop</h1>

  </div>
  <div className="filter-bar">
      <div className="filter-options">
        <span className="view-icon">Filter</span>
      </div>
      <div className="results-info">
        Showing 1–16 of 32 results
      </div>
      <div className="show-sort">
        <label className='Show'>
          Show 
          <input className='input1' type="number" defaultValue="16" min="1" max="32" />
        </label>
        <label className="Sort">
          Sort by 
         <input className='input' type="text" placeholder="Default" />
        </label>
      </div>
    </div>
    <section className='shop'>
      <div className="third">
        {products.slice(0, 4).map((product, index) => (
          <div className="first_img" key={index}>
            <img src={product.imgSrc} alt={product.name} />
            {product.discount && <span className={`discount${product.discount === 'New' ? '2' : ''}`}>{product.discount}</span>}
            <div className="overlay">
              <button onClick={() => handleAddToCart(product)}>Buy Now</button>
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
              Rp {product.price.toLocaleString()} 
              {product.oldPrice && <span className='edit'>Rp {product.oldPrice.toLocaleString()}</span>}
            </h4>
            <br />
          </div>
        ))}
      </div>

      <div className="forth">
        {products.slice(4).map((product, index) => (
          <div className="first_img" key={index}>
            <img src={product.imgSrc} alt={product.name} />
            {product.discount && <span className={`discount${product.discount === 'New' ? '2' : ''}`}>{product.discount}</span>}
            <div className="overlay">
              <button onClick={() => handleAddToCart(product)}>Buy Now</button>
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
              Rp {product.price.toLocaleString()} 
              {product.oldPrice && <span className='edit'>Rp {product.oldPrice.toLocaleString()}</span>}
            </h4>
            <br />
          </div>
        ))}
      </div>
      <div className="third">
        {products.slice(0, 4).map((product, index) => (
          <div className="first_img" key={index}>
            <img src={product.imgSrc} alt={product.name} />
            {product.discount && <span className={`discount${product.discount === 'New' ? '2' : ''}`}>{product.discount}</span>}
            <div className="overlay">
              <button onClick={() => handleAddToCart(product)}>Buy Now</button>
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
              Rp {product.price.toLocaleString()} 
              {product.oldPrice && <span className='edit'>Rp {product.oldPrice.toLocaleString()}</span>}
            </h4>
            <br />
          </div> 
        ))}
      </div>

      <div className="forth">
        {products.slice(4).map((product, index) => (
          <div className="first_img" key={index}>
            <img src={product.imgSrc} alt={product.name} />
            {product.discount && <span className={`discount${product.discount === 'New' ? '2' : ''}`}>{product.discount}</span>}
            <div className="overlay">
              <button onClick={() => handleAddToCart(product)}>Buy Now</button>
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
              Rp {product.price.toLocaleString()} 
              {product.oldPrice && <span className='edit'>Rp {product.oldPrice.toLocaleString()}</span>}
            </h4>
            <br />
          </div>
        ))}
      </div>
    </section>

<Footer_Two/>
    </div>
   
  )
}

