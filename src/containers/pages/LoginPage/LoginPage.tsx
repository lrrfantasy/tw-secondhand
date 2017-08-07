import * as React from 'react';
import { DispatchProp, connect } from 'react-redux';
import { push } from 'react-router-redux';
import Container from '../../Container/Container';
import Button from '../../../components/atoms/Button/Button';
import Logo from '../../../components/Logo/Logo';
import InputField from '../../../components/InputField/InputField';
import VerticalSpacing from '../../../components/atoms/VerticalSpacing/VerticalSpacing';
import './LoginPage.css';
import { userLogin } from '../../../modules/user/actions';
import * as D from '../../../definitions';

type LoginPageProps < S > = DispatchProp < S >;
class LoginPage extends React.Component < LoginPageProps < object >,
D.UserForLogin > {
  constructor() {
    super();
  }

  onLogin() {
    this
      .props
      .dispatch(userLogin({username: this.state.username, password: this.state.password}));
  }
  onRegister() {
    this
      .props
      .dispatch(push('register'));
  }

  onUsernameChange(e) {
    this.setState({username: e.target.value});
  }
  onPasswordChange(e) {
    this.setState({password: e.target.value});
  }
  render() {
    const titleProps = {
      title: '请登录',
      hasCloseButton: true
    };

    return (
      <div className="loginPage">
        <Container titleProps={titleProps}>
          <Logo/>
          <VerticalSpacing spacingHeightInEm={2}/>
          <InputField
            placeholder="用户名"
            onChange={(e) => this.onUsernameChange(e)}
          />
          <InputField
            placeholder="密码"
            isPasswordField={true}
            onChange={(e) => this.onPasswordChange(e)}
          />
          <VerticalSpacing spacingHeightInEm={2}/>
          <div className="menu"><Button onClick={() => this.onLogin()} name="登录"/></div>
          <div className="menu"><Button onClick={() => this.onRegister()} name="免费注册"/></div>
        </Container>
      </div>
    );
  }
}
export {LoginPage as LoginPageTest};
export default connect()(LoginPage);
