import React from "react";
import  ReactDOM  from "react-dom";
import { faker } from "@faker-js/faker";

const CommentDetail = (props) => {

    return(
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}></img>
                </a>
            <div className="content">
                <a href="/" alt="avatar">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">Nice blog post</div>
            </div>
            </div>
    );

};


export default CommentDetail ;