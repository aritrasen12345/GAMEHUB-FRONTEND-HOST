import postWithoutToken from '../lib/post-without-token';
import apis from './all-apis';
import LoginDetails from '../types/user/loginDetails';
import credentials from '../types/user/credentials';

/**
 * @description - This function is used to get login token and user details
 * @param body {email: string, password: string}
 */

const login = async (body: credentials) => {
  const res = await postWithoutToken(apis.LOGIN, body);
  return {
    ok: res.ok,
    data: res.data as LoginDetails,
    message: res.message as string,
  };
};

export default login;
