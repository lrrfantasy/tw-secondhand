import * as React from 'react';

class Button extends React.Component<any> {
  render() {
    return (
      <a className={this.props.class} onClick={this.props.onClick}>{this.props.children}</a>
    );
  }
}

export default Button;
