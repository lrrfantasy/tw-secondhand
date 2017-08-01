import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';
import AboutUsPage from '../containers/pages/AboutUs/AboutUsPage';
import RegisterPage from '../containers/pages/Register/RegisterPage';

const router = (
    <div>
        <Route exact={true} path="/" component={HomePage}/>
        <Route path="/about-us" component={AboutUsPage}/>
        <Route path="/register" component={RegisterPage}/>
    </div>
);

export default router;
