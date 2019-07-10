import React from "react";
import { Link } from "react-router-dom";
import plus from "./plus.png";

const Carousel = ({ users }) => (
  <div className="carousel">
    {users.map((user, i) => (
      <Link key={i} to={`/user/` + i}>
        <img className='ico' alt={user.name} src={user.img} />
      </Link>
    ))}
    <Link to={`/adduser/`}>
      <img alt="add user" src={plus} />
    </Link>
  </div>
);
export default Carousel;
