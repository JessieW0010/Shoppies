import React from 'react';
import SearchInput from '../common/SearchInput';
import { withRouter } from 'react-router-dom';
import { Avatar } from '../common';

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg sticky-top dark-bg p-3'>
      <a className='navbar-brand' href='/'>
        <img
          src={require('../../assets/images/logo.png')}
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt='Shoppies Logo'
        />
      </a>
      <SearchInput />
      <div className="w-25">
        <Avatar />
      </div>
    </nav>
  );
}

export default withRouter(NavBar);
