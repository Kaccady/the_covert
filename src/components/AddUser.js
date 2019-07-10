import React, { useState } from "react";
import { connect } from "react-redux";
import { UpdateData } from "../actions/data";
import { Redirect } from "react-router";

const AddUser = ({ users, dispatch }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState(
    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y"
  );
  const [mail, setMail] = useState("");
  const [job, setJob] = useState("");

  const [timeToGo, setTimeToGo] = useState(false);

  const addNewUser = event => {
    event.preventDefault();

    let newUsers = users.slice();
    let newUser = {
      name: name,
      img: img,
      job: job,
      mail: mail,
      comments: []
    };

    newUsers.push(newUser);

    dispatch(UpdateData(newUsers));

    setTimeToGo(true);
  };
  console.log(users.length);
  if (timeToGo) {
    return <Redirect to={`/user/`+(users.length-1)} />;
  }
  return (
    <form onSubmit={addNewUser}>
      <h3>Добавить пользователя</h3>
      <p>Имя</p>
      <input
        type="text"
        value={name}
        required
        maxLength="50"
        onChange={event => setName(event.target.value)}
      />
      <p>Изображение</p>
      <input
        type="text"
        value={img}
        required
        onChange={event => setImg(event.target.value)}
      />
      <p>Почта</p>
      <input
        type="email"
        value={mail}
        required
        maxLength="50"
        onChange={event => setMail(event.target.value)}
      />
      <p>Должность </p>
      <input
        type="text"
        value={job}
        required
        maxLength="50"
        onChange={event => setJob(event.target.value)}
      />
      <input type="submit" value="отправить" />
    </form>
  );
};

const mapStateToProps = state => {
  return {
    users: state.data
  };
};

export default connect(mapStateToProps)(AddUser);
