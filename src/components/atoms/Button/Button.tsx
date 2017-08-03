import * as React from 'react';
import './Button.css';

interface Props {
  disabled?: boolean;
  onClick: () => void;
  name: string;
}

const Button = (props: Props) => (
  <a
    className={`button ${props.disabled && 'disabled'}`}
    {...props.disabled || {onClick: props.onClick}}
  >
    {props.name}
  </a>
);

export default Button;
