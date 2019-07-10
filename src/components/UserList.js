import React from "react";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


const UserList = ({users}) => {
  return (
    <div className="content">
      <h1>userlist</h1>
      {users.map((user, i) => (
        <Link key={i} to={`/user/` + i}>
          <UserCard user={user} />
        </Link>
      ))}<Link to='/adduser/'>add user</Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users:state.data
  };
};

export default connect(
  mapStateToProps
)(UserList);
