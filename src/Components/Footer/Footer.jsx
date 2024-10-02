import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer id="Contacts">
        <p>Get In Touch</p>
        <h1>Contact Me</h1>
        <div className="contact_container">
            <div className="contact_detail_container">
                <div className="contact_details">
                    <img src="Gmail-logo.png" alt="" className="contact_link_img"/>
                    <p className="contact_text">roperezjomarie@gmail.com</p>
                </div>
            </div> 
            <p className="copyright">Copyright © 2024 <span class="name">JomarieRoperez</span>. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
