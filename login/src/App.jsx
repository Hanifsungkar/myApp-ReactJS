import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './store/action';

function App() {
  const isLoginSuccess = useSelector((state) => state.isLoginSuccess)
  const isLoginPending = useSelector((state) => state.isLoginPending)
  const loginError = useSelector((state) => state.loginError)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailChange = (event) => {
    setEmail(event.target.value)
  }

  const passwordChange = (event) => {
    setPassword(event.target.value)
  }

  const doSubmit = (event) => {
    event.preventDefault()
    dispatch(login(email, password))
    setEmail('')
    setPassword('')
  }

  return (
    <form name="loginForm" onSubmit={doSubmit}>
      <div className="form-group-collection">
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" onChange={emailChange} value={email} />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" onChange={passwordChange} value={password} />
        </div>
      </div>

      <input type="submit" value="Login" />

      <div className="message">
        { isLoginPending && <div><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" alt="Loading..." /></div> }
        { isLoginSuccess && <div>Success.</div> }
        { loginError && <div>{loginError.message}</div> }
      </div>
    </form>
  );
}

export default App;