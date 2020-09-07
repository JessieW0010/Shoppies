import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../types';

const mapStateToProps = ({ user }: ApplicationState) => ({
  user
});

function Avatar() {
  return (
    <div className="avatar p-4 d-flex align-items-center">
      <p className="text-white m-0 pr-3">Jessie</p>
      <img src={require("../../../assets/images/avatar.png")} width="35" height="35" className="d-inline-block align-top rounded" alt="Shoppies Logo"/>
    </div>
  );
}

export default connect(mapStateToProps, null)(Avatar);