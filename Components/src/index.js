import React from "react";
import  ReactDOM  from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDatail";

const App = () => {

    
    return ( 
        <div className="ui conatainer comments"> 
            <CommentDetail author = "Sam" timeAgo = "Today at 4:50pm" text = "Hi" image = {faker.image.avatar()}/>
            <CommentDetail author = "Alex" timeAgo = "Today at 2:40pm" text = "How are you" image = {faker.image.avatar()}/>
            <CommentDetail author = "Jane" timeAgo = "Today at 5:43pm" text = "doing?" image = {faker.image.avatar()}/>
            
        </div>
    ) ;
}

ReactDOM.render(<App /> , document.querySelector('#root'));