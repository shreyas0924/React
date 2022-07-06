import React from "react";
import  ReactDOM  from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDatail";

const App = () => {

    
    return ( 
        <div className="ui conatainer comments"> 
            <CommentDetail author = "Sam"/>
            <CommentDetail author = "Alex"/>
            <CommentDetail author = "Jane"/>
            
        </div>
    ) ;
}

ReactDOM.render(<App /> , document.querySelector('#root'));