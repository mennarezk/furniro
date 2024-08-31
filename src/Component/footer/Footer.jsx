import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
  return (
    <section className="footer">
      <div className="footerDiv">
        <div className="Div1">
          <h2 className='Funiro'>Funiro</h2>
          <h5 className="header5">400 University Drive Suite 200 Coral</h5>
          <h4>Gables,</h4>
          <h4>FL 33134 USA</h4>
        </div>
        <div className="Div2">
          <h4>Links</h4>
          <Link className="linkFooter" to="/">Home</Link>
          <Link className="linkFooter" to="/shop">Shop</Link>
          <Link className="linkFooter" to="/about">About</Link>
          <Link className="linkFooter" to="/contact">Contact</Link>
        </div>
        <div className="Div3">
          <h4>Help</h4>
          <Link className="linkFooter" to="">Payment Options</Link>
          <Link className="linkFooter" to="">Returns</Link>
          <Link className="linkFooter" to="">Privacy Policy</Link>
        </div>
        <div className="Div4">
          <h4>NewsLetters</h4>
          <div className="NewsLetters">
            <input type="text" placeholder="Enter Your Email Message" />
            <h6>SUBSCRIBE</h6>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <h6 className="lastText">2023 Furino. All rights reserved</h6>
    </section>
  )
}
