import axios from 'axios';
import authHeader from './auth-header';

const base = "https://api-dot-nhsproject-342615.nw.r.appspot.com";
const ADD_USER_URL = base.concat("/api/admin/register");
const DELETE_USER_URL = base.concat("/api/admin/unregister");
const GET_USER_URL = base.concat("/api/data/user");
const GET_QR_CODE = base.concat("/api/admin/getQRCode?nhsid=");


class UserService {
  registerUser(nhsid, password, privilege, jwt) {
    const config = {
      headers: authHeader()
    };
    return axios.post(
      ADD_USER_URL,
      {
        nhsid,
        password,
        privilege,
      },
      config
    );
  }

  deleteUser(nhsid, jwt) {
    const config = {
      headers: authHeader()
    };
    return axios.post(
      DELETE_USER_URL,
      {
        nhsid,
        type: "user",
      },
      config
    );
  }

  getUsers(jwt, limit = 0) {
    const config = {
      headers: authHeader()
    };
    return axios.get(GET_USER_URL, config);
  }

  getQRCode(nhsid, jwt) {
    const config = {
      headers: authHeader()
    };
    return axios.get(GET_QR_CODE.concat(nhsid), config);
  }
}

export default new UserService;