import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CommentSection({comments, addComment}) {

  // const[name, setName] = useState("");
  // const[comment, setComment] = useState("");
  // const[comments,setComments] = useState([]);
  const[nameComment, setNameComment] = useState({
    name: "",
    comment: "",
    date: new Date().toLocaleTimeString()
  })

  console.log(comments);
  console.log("NAMECOMMENT", nameComment);

  // const onClickHandler = (nameComment) => {
  //   setComments((comments) => [...comments, nameComment]);
  // }


  // const onChangeHandler = (e) => {
  //   setComment(e.target.value);
  // };

  // const onChangeHandler2 = (e) => {
  //   setName(e.target.value)
  // };

const handleSubmit = (e) => {
  e.preventDefault();
  addComment(nameComment);

  //refresh handleSubmit new form
  setNameComment({
    name: "",
    comment: "",
  })
}

const handleChange = (e) => {
  const value = e.target.value;
  const name = e.target.name;

  setNameComment((state) => ({
    ...state,
    [name]: value
  }));
};


    return (
      <div className="discussion-div">
        {comments.map((text) => (
          <div
          key={text.index}
          className="comment-container">{text.name}
          <div></div>
          {text.comment}
          {/* <h2>Posted on {new Date().toLocaleTimeString()}</h2> */}
          <div>
            {text.date}
          </div>
          </div>

        ))}

        <div className="comment-submit">
          <form 
          className="name-input"
          onSubmit={handleSubmit}
          >

            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            id="name"
            value={nameComment.name}
            name="name"
            onChange={handleChange}
            />

            <h3 className="comment-text">Comment</h3>
            <textarea
            value={nameComment.comment}
            name="comment"
            onChange={handleChange}
            className="input-box" 
            />
            <div>
            </div>
            
            <button
            className="comment-button">Submit</button>
          </form>
        </div>
      </div>
    )
  }
