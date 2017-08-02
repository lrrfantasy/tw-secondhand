import * as React from 'react';
import Button from '../../../components/atoms/Button/Button';
import User from '../../../components/atoms/User/User';
import VerticalSpacing from '../../../components/atoms/VerticalSpacing/VerticalSpacing';
import Container from '../../Container/Container';
import './ProfilePage.css';

const logo = require('../../../assets/logo.png');

interface Props {
  name: string;
}

class ProfilePage extends React.Component<Props, {}> {
  constructor() {
    super();
    this.onSellingProductPresses = this.onSellingProductPresses.bind(this);
    this.onBoughtProductPressed = this.onBoughtProductPressed.bind(this);
    this.onLogoutPressed = this.  onLogoutPressed.bind(this);
  }

  onSellingProductPresses() {

  }

  onBoughtProductPressed() {

  }

  onLogoutPressed() {

  }

  render() {
    const titleProps = {
      title: '个人信息',
    };

    return (
      <div>
        <Container titleProps = {titleProps}>
          <div><User name={this.props.name} icon={logo}/></div>
          <VerticalSpacing spacingHeightInEm={3} />
          <div>
            <div className="menu"><Button onClick={this.onSellingProductPresses} name="已买宝贝" /></div>
            <div className="menu"><Button onClick={this.onBoughtProductPressed} name="出售宝贝" /></div>
            <div className="menu"><Button onClick={this.onLogoutPressed} name="退出登录"/></div>
          </div>
          <VerticalSpacing spacingHeightInEm={3} />
        </Container>
      </div>
    );
  }
}

export default ProfilePage;
