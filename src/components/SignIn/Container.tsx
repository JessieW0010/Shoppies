import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

interface ISignInProps extends RouteComponentProps {
  signIn: (email: string, password: string, history: History ) => void;
}

function SignIn({
  signIn,
  history
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

  return (
    <div className="dark-bg h-100 w-100 p-0 m-0 d-flex flex-column align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center pt-4 w-75">
        <img src={require("../../assets/images/logo.png")} className="m-auto" width="200" height="200" alt="Shoppies Logo"/>
        <p className="logo text-left w-100 text-white">Login to your account.</p>
      </div>
      <div className="w-75">
        <div className="p-1">
          <label className="text-light">Email</label>
          <input name="email" type="text" placeholder="Email" className="form-control bg-dark text-white" value={state.email} onChange={handleOnChange}/>
        </div>
        <div className="p-1">
          <label className="text-light">Password</label>
          <input name="password" type="password" placeholder="Password" className="form-control bg-dark text-white" value={state.password} onChange={handleOnChange}/>
        </div>
        <div className="w-100 d-flex align-items-center flex-column">
          <button onClick={login} type="button" className="btn btn-primary btn-sm w-50 m-4">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(SignIn);
