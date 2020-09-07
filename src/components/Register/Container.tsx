import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { IRegisterPayload } from '../../types';
import { IRegister } from '../../types/actionTypes';
import { History } from 'history';
interface IRegisterProps extends RouteComponentProps {
  register: (payload: IRegisterPayload, history: History) => void;
}

function Register({
  history,
  register
}: IRegisterProps) {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: ""
  })
  const [error, setError] = useState("");
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 725px)' })

  const signUp = () => {
    // need to add proper validators and errors
    const { first_name, last_name, email, password, confirm_password } = state;
    if (first_name && last_name && email && password && (password === confirm_password)) {
      register(state, history);
    }
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="dark-bg h-100 w-100 p-0 m-0 d-flex flex-column align-items-center overflow-auto">
      <div className="d-flex flex-column justify-content-center align-items-center pt-4 w-75 pb-3">
        <img src={require("../../assets/images/logo.png")} className="m-auto" width="200" height="200" alt="Shoppies Logo"/>
        <p className="logo text-left w-100 text-white p-0 m-0">Create an account.</p>
        <small className="text-left w-100 text-white">Already have an account? <a href="/login">Login</a></small>
      </div>
      <div className="w-75">
        <div className="row p-1 m-0">
          <div className={`col-sm p-0 ${!isTabletOrMobile && "pr-2"}`}>
            <label className="text-light">First Name</label>
            <input type="text" name="first_name" placeholder="First Name" className="form-control bg-dark text-white" value={state.first_name} onChange={handleOnChange}/>
          </div>
          <div className={`col-sm p-0 ${!isTabletOrMobile && "pl-2"}`}>
            <label className="text-light">Last Name</label>
            <input type="text" name="last_name" placeholder="Last Name" className="form-control bg-dark text-white" value={state.last_name} onChange={handleOnChange}/>
          </div>
        </div>
        <div className="row m-0 p-1">
          <label className="text-light">Email</label>
          <input type="text" name="email" placeholder="Email" className="form-control bg-dark text-white" value={state.email} onChange={handleOnChange}/>
        </div>
        <div className="row m-0 p-1">
          <label className="text-light">Password</label>
          <input type="password" name="password" placeholder="Password" className="form-control bg-dark text-white" value={state.password} onChange={handleOnChange}/>
        </div>
        <div className="row m-0 p-1">
          <label className="text-light">Confirm Password</label>
          <input type="password" name="confirm_password" placeholder="Type your password again" className="form-control bg-dark text-white" value={state.confirm_password} onChange={handleOnChange}/>
        </div>
        <div className="row m-0 p-1 align-items-center flex-column">
          <button onClick={signUp} type="button" className="btn btn-primary w-50 m-4">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Register);
