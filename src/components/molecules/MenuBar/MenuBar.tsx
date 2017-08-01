import * as React from 'react';
import Button from '../../../components/atoms/Button/Button';
import './MenuBar.css';

const homeIcon = require('../../../assets/home.png');
const menuIcon = require('../../../assets/menu.png');
const userIcon = require( '../../../assets/user.png');

class MenuBar extends React.Component<{}, any> {
  constructor() {
    super();
    this.state = { homeActive: true, menuActive: false, userActive: false, };
    this.onMenuButtonPressed = this.onMenuButtonPressed.bind(this);
    this.onUserButtonPressed = this.onUserButtonPressed.bind(this);
    this.onHomeButtonPressed = this.onHomeButtonPressed.bind(this);
  }

  onHomeButtonPressed() {
    this.setState({ homeActive: true, menuActive: false, userActive: false, });
  }

  onMenuButtonPressed() {
    this.setState({ homeActive: false, menuActive: true, userActive: false, });
  }

  onUserButtonPressed() {
    this.setState({ homeActive: false, menuActive: false, userActive: true, });
  }

  render() {
    return (
      <div className="menuBar">
        <Button class={this.state.homeActive ? 'iconButtonPressed' : 'iconButton'} onClick={this.onHomeButtonPressed}>
          <img src={homeIcon} />
        </Button>
        <Button class={this.state.menuActive ? 'iconButtonPressed' : 'iconButton'} onClick={this.onMenuButtonPressed}>
          <img src={menuIcon} />
        </Button>
        <Button class={this.state.userActive ? 'iconButtonPressed' : 'iconButton'} onClick={this.onUserButtonPressed}>
          <img src={userIcon} />
        </Button>
      </div>
    );
  }
}

export default MenuBar;
