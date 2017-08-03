import * as React from 'react';
import './Button.css';

interface Props {
  disabled?: boolean;
  onClick: () => void;
  name: string;
}

const Button = (props: Props) => (
  <a className={`button ${props.disabled && 'disabled'}`} onClick={props.disabled ? () => {} : props.onClick}>{props.name}</a>
);

export default Button;
