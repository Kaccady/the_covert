import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserList from "./UserList";
import User from "./User";
import { connect } from "react-redux";
import { FetchData } from "../actions/data";
import AddUser from "./AddUser";

function App({ hasErrored, fetchData, isLoading }) {
  useEffect(() => fetchData("https://api.myjson.com/bins/1cuwrv"), [fetchData]);

  if (hasErrored) {
    return <p>Sorry! There was an error loading users</p>;
  } else if (isLoading) {
    return <p>Loading…</p>;
  } else
    return (
      <Router>
        <div className="App">
          <Link to="/">userlist</Link>
          <Route path="/" exact component={UserList} />
          <Route path="/user/:user" component={User} />
          <Route path="/adduser/" component={AddUser}/>
        </div>
      </Router>
    );
}

const mapStateToProps = state => {
  return {
    hasErrored: state.dataHasErrored,
    isLoading: state.dataIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(FetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
