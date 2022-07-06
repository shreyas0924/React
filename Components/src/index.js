import React from "react";
import  ReactDOM  from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDatail";

const App = () => {

    
    return ( 
        <div className="ui conatainer comments"> 
            <CommentDetail author = "Sam" timeAgo = "Today at 4:50pm"/>
            <CommentDetail author = "Alex" timeAgo = "Today at 2:40pm"/>
            <CommentDetail author = "Jane" timeAgo = "Today at 5:43pm"/>
            
        </div>
    ) ;
}

ReactDOM.render(<App /> , document.querySelector('#root'));