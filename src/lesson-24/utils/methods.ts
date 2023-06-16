export const checkToken = (token) => {
  if (token) {
    const tokenData = JSON.parse(token);
    return +tokenData.expires > +new Date();
  }

  return false;
};

export const checkStorageToken = () => {
  const token = localStorage.getItem('user_token');

  if (token) {
    const tokenData = JSON.parse(token);
    return +tokenData.expires > +new Date();
  }

  return false;
};
