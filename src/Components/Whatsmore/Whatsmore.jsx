import React from 'react';
import './Whatsmore.css'
import img1 from './img1.png';

const Whatsmore = () => {
    return (
        <div>
            <section id="whatsMore">
                <h1>What is <span className="gradient-text">Web Development?</span></h1>
                <img src={img1} alt="Image here" />
                <ul>
                    <h2><span className="gradient-text">Web Development</span></h2>

                    <p>- Web development is the process of creating, 
                        building, and maintaining websites and web applications 
                        that run online on a browser. It involves a range of tasks, 
                        rom designing the user interface (what users see) to managing 
                        the backend systems (how data is handled).
                    </p>
                </ul>

            </section>
        </div>
    );
}

export default Whatsmore;
