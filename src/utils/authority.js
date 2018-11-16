// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority(str) {
  // return localStorage.getItem('ironic-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? localStorage.getItem('ironic-authority') : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority || ['guest']; // default is guest
}

export function setAuthority(authority) {
  const theAuthority = typeof authority === 'string' ? [authority] : authority;
  return localStorage.setItem('ironic-authority', JSON.stringify(theAuthority));
}
