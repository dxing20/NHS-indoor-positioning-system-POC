const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.data.signedToken) {
    return { Authorization: `Bearer ${user.data.signedToken}` };
  } else {
    return {};
  }
}

export default authHeader;