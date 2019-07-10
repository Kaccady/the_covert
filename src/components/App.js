import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserList from "./UserList";
import User from "./User";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/user/">user</Link>
        <Link to="/">userlist</Link>
        <Route path="/" exact component={UserList} />
        <Route path="/user/" component={User} />
      </div>
    </Router>
  );
}

export default App;
