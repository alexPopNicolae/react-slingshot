import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import TestPage from './components/TestPage';
import UserFillDetailsPage from './components/UserFillDetailsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="testpage" component={TestPage} />
    <Route path="userdetails" component={UserFillDetailsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
