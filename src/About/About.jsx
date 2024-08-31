import React from 'react'
import Footer_Two from '../Footer_Two/Footer_Two'
import './About.css'
export default function About() {
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
        <div className="coverAbout">
  <img src="src\assets\2.jpg" alt="" />
 <h1>About Our Brand</h1>
 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex numquam libero odio aspernatur.</p>
  </div> 
  <div className="Overview">
    <h2>Overview</h2>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eos dolores assumenda.
     Harum, voluptates quidem eveniet itaque explicabo enim? Veritatis in deserunt adipisci? 
     Et exercitationem nemo pariatur enim, excepturi ipsa recusandae laudantium consequuntur.
      Ipsum deserunt quibusdam nostrum nihil autem totam a ullam tempore harum, officiis velit perferendis 
      quod asperiores culpa ex veniam, porro at repudiandae. Blanditiis ducimus </p>
</div>

<div className="containerAbout">
      <div className="left-content">       
        <h1>Carefully Considered Details & Perfections</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in eu mi nulla risus. Maecenas donec fermentum, eleifend id pellentesque amet purus.</p>
        <button>Learn More</button>
        <div className="image-container">
          <img src="src\assets\pngtree-contemporary-beige-home-interior-featuring-chic-modern-furniture-3d-render-image_3756970.jpg" alt="Living room" />
        </div>
      </div>


      
      <div className="right-content">
        <div className="image-container">
          <img src="src\assets\26.jpg" alt="Living room" />
        </div>
        <div className="text-container">
          <h1>Crafted in Combination of beauty & Perfection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in eu mi nulla risus. Maecenas donec fermentum, eleifend id pellentesque amet purus.</p>
          <button>Shop now</button>
        </div>
      </div>
    </div>

      <Footer_Two/>
    </div>
  )
}
