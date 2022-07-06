import React from "react";
import  ReactDOM  from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDatail";

const App = () => {

    
    return ( 
        <div className="ui conatainer comments"> 
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
        </div>
    ) ;
}

ReactDOM.render(<App /> , document.querySelector('#root'));