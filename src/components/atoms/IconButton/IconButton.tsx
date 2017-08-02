import * as React from 'react';
import './IconButton.css';

interface Props {
  active?: boolean;
  onClick: () => void;
  children: React.ReactChild;
}

const Button = (props: Props) => (
  <a className={props.active ? 'iconButtonActive' : 'iconButtonNormal'} onClick={props.onClick}>{props.children}</a>
);

export default Button;
