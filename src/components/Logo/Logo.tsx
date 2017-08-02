import * as React from 'react';
import './Logo.css';

const logo = require('../../assets/logo.png');

interface LogoProps {
   logo?: string;
}

export default (props: LogoProps) => (
    <div className="App-logo-div">
        <img src={props.logo || logo} className="App-logo" alt="logo" />
    </div>
);
