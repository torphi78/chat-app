import React from 'react';
import './Contact.css';
import PropTypes from "prop-types";


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }
  render() {
    return (
      <div className="Contact">
          <img src={this.props.avatar} alt={this.props.avatar} className="avatar" />
          <div>
            <div className="name">{this.props.name}</div>
            <div className="status">
            <div className={this.state.online === true ? "status-online" : "status-offline"}
              onClick={(event) => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline });
              }} 
            />
            <div className="status-text">{this.state.online === true ? "online" : "offline"}</div>
          </div>
          </div>
      </div>
    );
  }
}



Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  statut: PropTypes.isRequired,
};
  
  export default Contact;