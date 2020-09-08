import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

function Welcome({ history }: RouteComponentProps) {
  return (
    <div className="dark-bg h-100 w-100 p-0 m-0">
      <div className="d-flex flex-column justify-content-center align-items-center pt-4">
        <img src={require("../../assets/images/logo.png")} className="m-auto" width="200" height="200" alt="Shoppies Logo"/>
        <p className="logo text-center w-100 text-white">The Shoppies</p>
      </div>
      <div className="row justify-content-center">
        <button onClick={() => history.push("/register")} type="button" className="btn btn-primary btn-sm w-50 m-3">Sign Up</button>
        <button onClick={() => history.push("/login")} type="button" className="btn btn-primary btn-sm w-50 m-3">Login</button>
      </div>
    </div>
  )
}

export default withRouter(Welcome);
