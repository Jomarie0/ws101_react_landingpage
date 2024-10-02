import React from 'react'
import logo from './bg-img2.jpg';
import './Hero.css'

console.log(logo);
const scrollToWhatsMore = () => {
    window.location.hash = "#whatsMore";
  };
const Hero = () => {
    return(
        <section id="heroSec">
            <aside>
                <h1>Why <span className="highlight">Web Development</span> Matters?</h1>
                <h3>The Backbone of the Digital World Text:</h3>
                <p>In an increasingly digital world, web development is crucial. 
                    It enables businesses to reach a global audience, provides 
                    platforms for social interaction, and drives innovation in 
                    virtually every industry. Without web development, the 
                    internet as we know it wouldn't exist.
                </p>
                <button  className='button-89' onClick={scrollToWhatsMore}>Learn More ↓</button>

            </aside>
            <div>

            </div>

        </section>
    )
}
export default Hero;