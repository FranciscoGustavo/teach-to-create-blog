export const LOGIN = 'LOGIN';
export const loginAction = (payload) => ({
  type: LOGIN, payload,
});

export const LOGOUT = 'LOGOUT';
export const logoutAction = () => ({
  type: LOGOUT, payload: null,
}) 