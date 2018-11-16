/**
 * title: App Layout
 * Routes:
 *   - src/layouts/Authorized.js
 * authority:
 *   - admin
 *   - user
 */

import React from 'react';
import BasicLayout from './BasicLayout';
import pathToRegexp from 'path-to-regexp';
import UserLayout from './UserLayout';
import Authorized from './Authorized';
import styles from './index.css';


function Layout(props) {

  const { location: { pathname } } = props;

  if (pathToRegexp(pathname).test('/user/login')) {
    return <UserLayout {...props} />;
  }

  return <BasicLayout {...props} />;
}

export default Layout;
