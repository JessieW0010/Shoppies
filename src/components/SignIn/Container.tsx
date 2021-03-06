import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

interface ISignInProps extends RouteComponentProps {
  signIn: (email: string, password: string, history: History ) => void;
  serverError: number | null;
}

function SignIn({
  signIn,
  history,
  serverError
}: ISignInProps) {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const login = () => {
    const { email, password } = state;
    if (email && password) {
      signIn(email, password, history);
    }
  }

  const renderErrorMsg = () => {
    return (
      <p className="p-1 m-0 text-danger form-error">{serverError === 401 && "Email or password was incorrect."}</p>
    )
  }

  return (
    <div className="dark-bg h-100 w-100 p-0 m-0 d-flex flex-column align-items-center overflow-auto">
      <div className="d-flex flex-column justify-content-center align-items-center pt-4 w-75 pb-3">
        <img src={require("../../assets/images/logo.png")} className="m-auto" width="200" height="200" alt="Shoppies Logo"/>
        <p className="logo text-left w-100 text-white p-0 m-0">Login.</p>
        <small className="text-left w-100 text-white">Don't have an account? Don't worry! <a href="/register">Sign Up.</a></small>
      </div>
      <div className="w-75">
        {serverError && renderErrorMsg()}
        <div className="p-1">
          <label className="text-light">Email</label>
          <input name="email" type="text" placeholder="Email" className="form-control bg-dark text-white" value={state.email} onChange={handleOnChange}/>
        </div>
        <div className="p-1">
          <label className="text-light">Password</label>
          <input name="password" type="password" placeholder="Password" className="form-control bg-dark text-white" value={state.password} onChange={handleOnChange}/>
        </div>
        <div className="w-100 d-flex align-items-center flex-column">
          <button onClick={login} type="button" className="btn btn-primary w-50 m-4">Login</button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(SignIn);
