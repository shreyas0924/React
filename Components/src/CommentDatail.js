import React from "react";
import  ReactDOM  from "react-dom";
import { faker } from "@faker-js/faker";

const CommentDetail = () => {

    return(
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}></img>
                </a>
            <div className="content">
                <a href="/" alt="avatar">
                    Shreyas
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00pm</span>
                </div>
                <div className="text">Nice blog post</div>
            </div>
            </div>
    );

};


export default CommentDetail ;