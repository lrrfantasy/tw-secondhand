import * as React from 'react';
import Container from '../../Container/Container';
import Button from '../../../components/atoms/Button/Button';
import Logo from '../../../components/Logo/Logo';
import InputField from '../../../components/InputField/InputField';
import VerticalSpacing from '../../../components/atoms/VerticalSpacing/VerticalSpacing';
import './LoginPage.css';

class LoginPage extends React.Component<{}, {}> {
  constructor() {
    super();
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {

  }
  onRegister() {

  }

  render() {
    const titleProps = {
      title: '请登录',
      hasCloseButton: true,
    };

    return(
      <div className="loginPage">
        <Container titleProps={titleProps}>
          <Logo />
          <VerticalSpacing spacingHeightInEm={2} />
          <InputField placeholder="用户名"/>
          <InputField placeholder="密码" isPasswordField={true}/>
          <VerticalSpacing spacingHeightInEm={2} />
          <div className="menu"><Button onClick={this.onLogin} name="登录" disabled={true}/></div>
          <div className="menu"><Button onClick={this.onRegister} name="免费注册" /></div>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
