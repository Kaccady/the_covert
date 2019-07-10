import React from "react";

const UserCard = ({ user, showMail }) => {
  return (
    <div className="card">
      <img className='ico' alt={user.name} src={user.img} />
      <div className="column">
        <p>{user.name}</p>
        <p>{user.job}</p>
        <p hidden={showMail ? false : true}>{user.mail}</p>
      </div>
    </div>
  );
};
export default UserCard;
