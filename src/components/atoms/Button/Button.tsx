import * as React from 'react';
import './Button.css';

interface Props {
  onClick: () => void;
  name: string;
}

const Button = (props: Props) => (
  <a className='button' onClick={props.onClick}>{props.name}</a>
);

export default Button;
