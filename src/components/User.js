import React from "react";
import UserCard from "./UserCard";
import Carousel from "./Carousel";
import Comments from "./Comments";
import { connect } from "react-redux";


const User = ({ match,users,dispatch }) => {
  return (
    <div className="content">
      <Carousel users={users} />
      <h1>User</h1>
      <UserCard user={users[match.params.user]} showMail={true} />
      <Comments users={users} id={match.params.user} dispatch={dispatch} />
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
)(User);
