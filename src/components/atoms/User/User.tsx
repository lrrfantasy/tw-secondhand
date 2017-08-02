import * as React from 'react';
import './User.css';

const icon = require('../../../assets/logo.png');

const User = (props) => (
  <div className="user">
    <div className="logo"><img className="img" alt="img" src={icon} /></div>
    <div className="name">{props.name}</div>
  </div>
);

export default User;
