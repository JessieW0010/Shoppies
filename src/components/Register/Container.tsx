import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IRegisterProps extends RouteComponentProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  handleOnChange: () => void;
}

function Register({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  handleOnChange
}: IRegisterProps) {
  return (
    <div className="dark-bg h-100 w-100 p-0 m-0 d-flex flex-column align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center pt-4 w-75">
        <img src={require("../../assets/images/logo.png")} className="m-auto" width="200" height="200" alt="Shoppies Logo"/>
        <p className="logo text-left w-100 text-white">Create an account.</p>
      </div>
      <div className="w-75">
        <div className="p-1">
          <label className="text-light">First Name</label>
          <input type="text" placeholder="First Name" className="form-control bg-dark text-white" value={firstName} onChange={handleOnChange}/>
        </div>
        <div className="p-1">
          <label className="text-light">Last Name</label>
          <input type="text" placeholder="Last Name" className="form-control bg-dark text-white" value={lastName} onChange={handleOnChange}/>
        </div>
        <div className="p-1">
          <label className="text-light">Email</label>
          <input type="text" placeholder="Email" className="form-control bg-dark text-white" value={email} onChange={handleOnChange}/>
        </div>
        <div className="p-1">
          <label className="text-light">Password</label>
          <input type="text" placeholder="Password" className="form-control bg-dark text-white" value={password} onChange={handleOnChange}/>
        </div>
        <div className="p-1">
          <label className="text-light">Confirm Password</label>
          <input type="text" placeholder="Type your password again" className="form-control bg-dark text-white" value={confirmPassword} onChange={handleOnChange}/>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Register);
