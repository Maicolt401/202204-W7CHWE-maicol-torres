import "./app.css";

function App() {
  return (
    <>
      <form className="login-form">
        <p className="login-text">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-lock fa-stack-1x"></i>
          </span>
        </p>
        <input
          type="email"
          className="login-username"
          autoFocus
          required={true}
          placeholder="Email"
        />
        <input
          type="password"
          className="login-password"
          required={true}
          placeholder="Password"
        />
        <input
          type="submit"
          name="Login"
          value="Login"
          className="login-submit"
        />
      </form>
      <a href="." className="login-forgot-pass">
        forgot password?
      </a>
      <div className="underlay-photo"></div>
      <div className="underlay-black"></div>
    </>
  );
}

export default App;
