import React from 'react';
import { Avatar } from '../common';
import Search from '../SearchInput';
import { connect } from 'react-redux';
import { logout } from '../../store/actions';

const mapDispatchToProps = {
  logout
};

interface IHomePageProps {
  logout: () => void;
}

function HomePage({ logout }: IHomePageProps) {
  return (
    <div className='dark-bg h-100 w-100 p-0 m-0'>
      <div className='sticky-top bg-faded justify-content-end'>
        <Avatar />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center pt-4'>
        <img
          src={require('../../assets/images/logo.png')}
          className='m-auto'
          width='200'
          height='200'
          alt='Shoppies Logo'
        />
        <p className='logo text-center w-100 text-white'>The Shoppies</p>
        <Search />
      </div>
      <p onClick={logout} className="logout text-white">Logout</p>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(HomePage);
