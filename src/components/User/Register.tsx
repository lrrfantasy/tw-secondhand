import * as React from 'react';
import './Logo.css';

// const logo = require('./logo.svg');
const logo = require('../../../src/assets/logo.png');

interface LogoProps {
   logo?: string;
}

export default (props: LogoProps) => (
    <img src={props.logo || logo} className="App-logo" alt="logo" />
);
