import React from 'react';

interface IAvatarProps {
  name: string;
}

function Avatar({
  name
}: IAvatarProps) {
  return (
    <div className="avatar p-4 d-flex align-items-center">
      <p className="text-white m-0 pr-3">{name}</p>
      <img src={require("../../../assets/images/avatar.png")} width="35" height="35" className="d-inline-block align-top rounded" alt="Shoppies Logo"/>
    </div>
  );
}

export default Avatar;