import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CommentSection() {

  const[name, setName] = useState("");
  const[comment, setComment] = useState("");
  const[comments,setComments] = useState([]);

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  }


  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onChangeHandler2 = (e) => {
    setName(e.target.value)
  };



    return (
      <div className="discussion-div">
        {comments.map((text) => (
          <div className="comment-container">{text}</div>
        ))}

        <div className="comment-submit">

          <form className="name-input">
            <label for="name">Name</label>
            <input 
            type="text" 
            id="name"
            value={name}
            onChange={onChangeHandler2}
            />

          <h3 className="comment-text">Comment</h3>
          <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box" 
          />
          <div>
          </div>
          
          <button
          onclick={onClickHandler}
          className="comment-button">Submit</button>
            </form>
            </div>
      </div>
    )
  }
