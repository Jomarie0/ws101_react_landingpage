import React from 'react'
import './KeyAspects.css'
import img2 from './img2.png';

const KeyAspects = () => {
  return (
    <section id="keyAspects">
            <h1><span class="gradient-text">Types of Web Development</span></h1>
            <p>There are three main types of web development: front-end development, back-end development, and full-stack development.</p>
            <img src={img2} alt="Image here" />
                <ul>
                <h2>1. What is <span class="gradient-text">Front-End Development?</span></h2>
                  
                    <ul>
                        <li>
                            Front-end development, also known as web designers, 
                            is the "client-facing" aspect of web development, 
                            responsible for creating and enhancing the appearance 
                            and user experience of a digital product.
                        </li>
                        <li>
                            Front-End Web Developers translate website design and 
                            visual ideas into code, while Front-End Software Developers 
                            program these ideas, acting as a bridge between design and technology.
                        </li>
                        <li>
                            Front-End Developers need strong programming knowledge in HTML, CSS, 
                            JavaScript, and frameworks like React, Bootstrap, Backbone, AngularJS, 
                            and EmberJS to create responsive websites, conduct testing, and adhere 
                            to SEO best practices.
                        </li>
                    </ul>
                    <ul>
                        <h2><span class="gradient-text">Front-End Development Jobs</span></h2>
                        <p>Unlike back-end development, there are a number of job 
                        titles that cover different skill sets and experience 
                        levels within front-end development, including:</p>
                        
                        <div class="list-cont">
                            <ul>
                                <li>Front-End Developer</li>
                                <li>Front-End Engineer</li>
                                <li>CSS/HTML Web Developer</li>
                                <li>Front-End Web Designer (this usually denotes a role that involves
                                     more visual and interaction design requirements)</li>
                                <li>Front-End User Interface Developer (covering interaction design skills)</li>
                            </ul>
                            <ul>
                                <li>Mobile Front-End Web Developer</li>
                                <li>Front-End SEO Expert (usually denoting a Developer with experience 
                                    incorporating SEO strategy)</li>
                                <li>Front-End Accessibility Expert</li>
                                <li>Front-End Dev Ops</li>
                                <li>Front-End QA (involving unit testing, functional testing, user testing, and A/B testing)</li>
                            </ul>
                        </div>
                    </ul>
                    
                    
                        
                </ul>
            <ul>
                <h2>2. What Is <span class="gradient-text">Back-End Development?</span></h2>
                
                <ul>
                    <li>Back-End Developers create and maintain the basic framework of a 
                        website, ensuring its functionality, including database interactions, 
                        user authentication, server configuration, and business logic, while 
                        Front-End Developers focus on the appearance. </li>
                    <li>The primary responsibility of Back-End Developers is to ensure the functionality 
                        of the site, including its responsiveness and speed. To do that, Back-End Developers 
                        have to know how to build servers with modern frameworks (while developing custom APIs 
                        and serving static websites and files), and how to manage databases and data on a web server.</li>
                    <li>Typically, Back-End Developers use server-side programming languages, including PHP, Ruby, 
                        and Python, as well as tools including MySQL, Oracle, and Git.</li>
                </ul>
            </ul>
            <ul>
                <h2>3. What Is a <span class="gradient-text">Full-Stack Development?</span></h2>
                    <ul>
                        <li>Full-Stack Developers are versatile professionals with expertise in 
                            front- and back-end development, often leading projects. They are 
                            generalists, adept at every development layer, and are the fourth-most 
                            in-demand job in tech, according to an Indeed study.</li>
                        <li>Developers often question the notion of being a "jack-of-all-trades" or 
                            master of none, as they specialize in either front-end or back-end development.</li>
                    </ul>
            </ul>
        
            
    </section>
  )
}

export default KeyAspects
