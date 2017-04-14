export function loginCheck(email, password) {
  return {
    type: 'LOGIN_CHECK',
    email,
    password,
  };
}

export default loginCheck;
