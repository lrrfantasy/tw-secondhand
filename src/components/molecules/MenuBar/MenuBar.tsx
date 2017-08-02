import * as React from 'react';
import IconButton from '../../../components/atoms/IconButton/IconButton';
import './MenuBar.css';

const homeIcon = require('../../../assets/home.png');
const menuIcon = require('../../../assets/menu.png');
const userIcon = require( '../../../assets/user.png');

interface States {
  activeIdx: number;
}

class MenuBar extends React.Component<{}, States> {
  constructor() {
    super();
    this.state = { activeIdx: 0 };
  }

  render() {
    return (
      <div className="menuBar">
        {
          [homeIcon, menuIcon, userIcon].map((icon, idx) => (
            <IconButton
              active = {idx === this.state.activeIdx }
              onClick = {() => {this.setState({activeIdx: idx}); }}
              key = {idx}
            >
              <img src={icon} />
            </IconButton>))
        }
      </div>
    );
  }
}

export default MenuBar;
