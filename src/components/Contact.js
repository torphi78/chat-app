import React from 'react';

import './Contact.css';

import PropTypes from "prop-types";

// function Contact() {
//     return (
//       <div className="Contact">
//         <img className="avatar" src="https://randomuser.me/api/portraits/men/48.jpg" alt="Anita"/>
//         <div>
//             <h3 className="name" >Anita Sutton</h3>
//             <div className="status">
//                 <p><span className="status-online"></span>online</p>
//             </div>
//         </div>
//       </div>
//     );
//   }
  
  function Contact(props) {  
    
    return (
      <div className="Contact">
          <img src={props.avatar} alt="card" className="avatar" />
          <div>
            <div className="name">{props.name}</div>
            <div className="status">
            <div className={props.status === true ? "status-online" : "status-offline"}/>
            <div className="status-text">{props.status === true ? "online" : "offline"}</div>
          </div>
          </div>
      </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  statut: PropTypes.isRequired,
};
  
  export default Contact;