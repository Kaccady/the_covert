import React, { useState } from "react";
import { UpdateData } from "../actions/data";

const Comment = ({ comment }) => (
  <div className="comment">
    <h5>{comment.tel}</h5>
    <h5>{comment.head}</h5>
    <p className="comment-text">{comment.text}</p>
  </div>
);

const Comments = ({ users, id, dispatch }) => {
const [tel,setTel]=useState('');
const [head,setHead]=useState('');
const [text,setText]=useState('');

  const comments = users[id].comments;

  const addComment = event => {
    event.preventDefault();

    let newComments = comments.slice();

    let updateValue = {
      tel: tel.slice(),
      head: head.slice(),
      text: text.slice()
    }

    newComments.unshift(updateValue);

    let newUsers = users.slice();

    newUsers[id].comments = newComments;

    dispatch(UpdateData(newUsers));

    setHead('');
    setText('');
  };

  return (
    <div className="comments">
      <form className="comments-form" onSubmit={addComment}>
        <p>comments</p>
        <label>
          номер телефона
          <input
          value={tel}
            onChange={event=>setTel(event.target.value)}
            required
            name="tel"
            type="tel"
            pattern="^79\d{9}$"
            maxLength="11"
            placeholder="79991234567"
          />
        </label>

        <textarea
         value={head}
         onChange={event=>setHead(event.target.value)}
          placeholder="заголовок"
          required
          type="text"
          minLength="5"
          maxLength="80"
          cols="40"
        />

        <textarea
           value={text}
           onChange={event=>setText(event.target.value)}
          placeholder="текст"
          required
          minLength="5"
          maxLength="128"
          cols="40"
          rows="4"
        />
        <input type="submit" value="отправить" />
      </form>
      {comments.slice(0, 5).map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
    </div>
  );
};
export default Comments;
