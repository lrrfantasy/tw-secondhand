import * as React from 'react';
import Button from '../../../components/atoms/Button/Button';
import './MenuBar.css';

const homeIcon = require('../../../assets/home.png');
const menuIcon = require('../../../assets/menu.png');
const userIcon = require( '../../../assets/user.png');

interface States {
  homeActive: boolean;
  menuActive: boolean;
  userActive: boolean;
}

class MenuBar extends React.Component<{}, States> {
  onHomeButtonPressed() {
    this.setState({ homeActive: true, menuActive: false, userActive: false, });
  }

  onMenuButtonPressed() {
    this.setState({ homeActive: false, menuActive: true, userActive: false, });
  }

  onUserButtonPressed() {
    this.setState({ homeActive: false, menuActive: false, userActive: true, });
  }

  constructor() {
    super();
    this.state = { homeActive: true, menuActive: false, userActive: false, };
    this.onMenuButtonPressed = this.onMenuButtonPressed.bind(this);
    this.onHomeButtonPressed = this.onHomeButtonPressed.bind(this);
    this.onUserButtonPressed = this.onUserButtonPressed.bind(this);
  }

  render() {
    return (
      <div className="menuBar">
        <Button
          classes={this.state.homeActive ? 'homeButton iconButtonPressed' : 'homeButton iconButton'}
          onClick={this.onHomeButtonPressed}
        >
          <img src={homeIcon} />
        </Button>
        <Button
          classes={this.state.menuActive ? 'menuButton iconButtonPressed' : 'menuButton iconButton'}
          onClick={this.onMenuButtonPressed}
        >
          <img src={menuIcon} />
        </Button>
        <Button
          classes={this.state.userActive ? 'userButton iconButtonPressed' : 'userButton iconButton'}
          onClick={this.onUserButtonPressed}
        >
          <img src={userIcon} />
        </Button>
      </div>
    );
  }
}

export default MenuBar;
