import React from 'react';
import { withRouter } from 'react-router-dom';

function Register() {
  return (
    <div className="dark-bg h-100 w-100 p-0 m-0">
      <div className="d-flex flex-column justify-content-center align-items-center pt-5">
        <img src={require("../../assets/images/logo.png")} className="m-auto" width="200" height="200" alt="Shoppies Logo"/>
        <p className="logo text-center w-100 text-white">The Shoppies</p>
      </div>
    </div>
  )
}

export default withRouter(Register);
