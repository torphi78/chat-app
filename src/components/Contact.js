import React from 'react';

import './Contact.css';

function Contact() {
    return (
      <div className="Contact">
        <img src="https://randomuser.me/api/portraits/men/48.jpg"/>
        <div>
            <h3>Anita Sutton</h3>
            <div className="status">
                <p><span className="status-online"></span>online</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Contact;