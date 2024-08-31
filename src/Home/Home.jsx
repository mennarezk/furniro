import React from 'react'
import Section_Two from '../sectionTwo/Section_Two'
import Section_Three from '../Section_three/Section_Three';
import './Home.css'
export default function Home() {
  return (
    <div className="div">
        <section className='home'>
    <div className="bg">
          <img src="src\assets\scandinavian-interior-mockup-wall-decal-background 1.png" alt="" />
    </div>
    <div className="contact">
      <h6>New Arrival</h6>
      <h2>Discover Our New Collection</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
      <button>Buy Now</button>
    </div>
    
   </section> 
   <Section_Two/>
   <Section_Three/>
    </div>
 
 )
}
