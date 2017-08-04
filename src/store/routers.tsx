import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';
import AboutUsPage from '../containers/pages/AboutUs/AboutUsPage';
import RegisterPage from '../containers/pages/Register/RegisterPage';
import ProfilePage from '../containers/pages/Profile/ProfilePage';
import LoginPage from '../containers/pages/LoginPage/LoginPage';

const router = (
    <div>
        <Route exact={true} path="/" component={HomePage}/>
        <Route path="/about-us" component={AboutUsPage}/>
        <Route path="/my-profile" render={() => (<ProfilePage name="monica" />)}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/login" component={LoginPage} />
    </div>
);

export default router;
