import * as React from 'react';

interface Props {
  classes: string;
  onClick: () => void;
  children: React.ReactChild;
}

class Button extends React.Component<Props> {
  render() {
    return (
      <a className={this.props.classes} onClick={this.props.onClick}>{this.props.children}</a>
    );
  }
}

export default Button;
