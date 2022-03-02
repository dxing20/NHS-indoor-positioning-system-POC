import loginStyles from "../styles/Login.module.css"

const Login = () => {
  return (
    <div className={loginStyles.loginBox}>
      <form className={loginStyles.loginForm}>
        <h2>Log in</h2>
        <div className={loginStyles.formGroup}>
          <input
            className={loginStyles.formControl}
            type="text"
            placeholder="Username"
            required
          ></input>
        </div>
        <div className={loginStyles.formGroup}>
          <input
            className={loginStyles.formControl}
            type="password"
            placeholder="Password"
            required
          ></input>
        </div>
        <div className={loginStyles.formGroup}>
          <button type="submit" className={loginStyles.button}>
            Log in
          </button>
        </div>
        <div>
          <label className={loginStyles.misc}>
            <input type="checkbox"></input>
            Remember Me
          </label>
          <a className={loginStyles.forgotpassword} href="/forgotpassord">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;