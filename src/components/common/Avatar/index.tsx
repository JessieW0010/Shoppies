import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState, IUser } from '../../../types';

const mapStateToProps = ({ user }: ApplicationState) => ({
  user
});

interface IAvatarProps {
  user: IUser
}

function Avatar({ user }: IAvatarProps) {
  return (
    <div className="avatar p-4 d-flex align-items-center">
      <p className="text-white m-0 pr-3">{user.first_name}</p>
      <div className="dropdown">
        <div className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
          <img src={require("../../../assets/images/avatar.png")} width="35" height="35" className="d-inline-block align-top rounded" alt="Shoppies Logo"/>
        </div>
        <div className="dropdown-menu" style={{ right: 0, left: '-200px'}} aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(Avatar);