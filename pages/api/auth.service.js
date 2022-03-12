import axios from "axios";
import Router from "next/router";

const base = "https://api-dot-nhsproject-342615.nw.r.appspot.com";
const JWT_URL = base.concat("/api/auth/login");


class AuthService {
  login(nhsid, password) {
    return axios.post(JWT_URL, {
      nhsid,
      password,
    })
      .then(user => {
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      });
  }

  logout() {
    localStorage.removeItem("user");
    Router.push('/login');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();