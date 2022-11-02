import bg from './illustration-people-login.png';
import google from './img/Google.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="form">
          <div className="hero">
            <h1 className="hero-title">Welcome back, Olivia</h1>
            <p className="hero-text">
              Continue with Google or enter your details
            </p>
            <a className="google-link" href="#">
              <img src={google} alt="" />
              Login in with Google
            </a>
            <div className="hr">
              <hr />
              or <hr />
            </div>
          </div>
          <form action="post">
            <input type="text" id="input-email" required />
            <label htmlFor="input-email" className="email-label">
              Email
            </label>
            <br />
            <input type="password" id="input-password" required />
            <label htmlFor="input-password" className="password-label">
              Password
            </label>
            <br />
            <div className="box">
              <div>
                <input type="checkbox" id="check" />
                <label htmlFor="check">Remember for 30 days</label>
              </div>
              <a href="#">Forget password</a>
            </div>
            <br />
            <button className="submit" type="submit">
              Log in
            </button>
          </form>
          <div className="signup">
            <label htmlFor="sign">Don't have an account?</label>
            <a id="sign" href="#">
              Sign up for free
            </a>
          </div>
        </div>
        <div className="image">
          <img src={bg} alt="background" className="background-image" />
        </div>
      </header>
    </div>
  );
}
export default App;
