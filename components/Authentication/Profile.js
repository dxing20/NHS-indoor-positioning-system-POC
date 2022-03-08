import { React, useState } from 'react';
import { useRouter } from 'next/router';
import authService from '../../pages/api/auth.service';
import loginStyles from '../styles/Login.module.css'

const Profile = (props) => {
  let {
    username,
    setUsername,
    password,
    setPassword,
  } = props;

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputs = (get, set) => {
    return (e) => {
      return set(e.target.value);
    };
  };


  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    authService
      .login(username, password)
      .then(() => {
        const returnUrl = router.query.returnUrl || '/';
        router.push(returnUrl);
      })
      .catch(error => {
        alert(error.response && JSON.stringify(error.response.data));
        setLoading(false);
      })
  }

  return (
    <div className={loginStyles.body}>
      <div className={loginStyles.loginBox}>
        <form
          className={loginStyles.loginForm}
          autoComplete="off"
          noValidate
          onSubmit={handleLogin}
        >
          <h2>Log in</h2>
          <div className={loginStyles.formGroup}>
            <label htmlFor="validationCustom01" className="form-label">
              Username / ID
            </label>
            <input
              className={loginStyles.formControl}
              type="text"
              id="validationCustom01"
              onChange={handleInputs(username, setUsername)}
              value={username}
              required
            />
            <div className="invalid-feedback">Required</div>
          </div>
          <div className={loginStyles.formGroup}>
            <label htmlFor="validationCustom02" className="form-label">
              Password
            </label>
            <input
              className={loginStyles.formControl}
              type="password"
              id="validationCustom02"
              onChange={handleInputs(password, setPassword)}
              value={password}
              required
            />
            <div className="invalid-feedback">Required</div>
          </div>
          <div className={loginStyles.formGroup}>
            <button type="submit" className={loginStyles.button}>
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;