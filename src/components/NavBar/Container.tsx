import React, { useState, useEffect, SyntheticEvent } from 'react';
import { IMovie } from '../../types';
import { Container } from 'react-bootstrap';
import SearchInput from '../SearchInput';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';

export interface INavBarPropTypes extends RouteComponentProps {
}

function NavBar({
  history
}: INavBarPropTypes) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-faded">
      <a className="navbar-brand" href="/">
        <img src={require("../../assets/images/logo.png")} width="30" height="30" className="d-inline-block align-top" alt="Shoppies Logo"/>
      </a>
      <SearchInput/>
    </nav>
  )
}

export default withRouter(NavBar);
