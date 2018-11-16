import React from 'react';
import RenderAuthorized from '@/components/Authorized';
import pathToRegexp from 'path-to-regexp';
import Redirect from 'umi/redirect';
import { getAuthority } from '@/utils/authority';

const Authority = getAuthority();
const Authorized = RenderAuthorized(Authority);

export default (props) => {
  const { location: { pathname }, children } = props;

  if (pathToRegexp(pathname).test('/user/login')) {
    return <>{children}</>
  }

  return (
    <Authorized authority={children.props.route.authority} noMatch={<Redirect to="/user/login" />}>
      {children}
    </Authorized>
  )
}

// export default ({ children }) => (
//   <Authorized authority={children.props.route.authority} noMatch={<Redirect to="/user/login" />}>
//     {children}
//   </Authorized>
// );