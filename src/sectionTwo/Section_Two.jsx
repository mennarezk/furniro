import React from 'react'
import './Section_Two.css'
export default function Section_Two() {
  return (
   <section className='sec_two'>
<h2>Browse The Range</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<div className="imgs">
    <div className="cover">
        <div className="img1">
        <img src="src\assets\image 100.png" alt="" />
        <h3>Dining</h3>
    </div>
    </div>
    <div className="cover">
           <div className="img1">
        <img src="src\assets\image 101.png" alt="" />
        <h3>Living</h3>
    </div>
    </div>
 <div className="cover">
       <div className="img1">
        <img src="src\assets\image 106.png" alt="" />
        <h3>Bedroom</h3>
    </div>
 </div>
 
</div>
   </section>
  )
}
