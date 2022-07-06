import React from "react";
import  ReactDOM  from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDatail";
import ApprovalCard from "./ApprovalCard";

const App = () => {

    
    return ( 
        <div className="ui conatainer comments"> 
            <ApprovalCard>
                <CommentDetail author = "Sam" timeAgo = "Today at 4:50pm" text = "Hi" image = {faker.image.avatar()}/>
            </ApprovalCard> 
            
            <ApprovalCard>
                <CommentDetail author = "Alex" timeAgo = "Today at 2:40pm" text = "How are you" image = {faker.image.avatar()}/>

            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author = "Jane" timeAgo = "Today at 5:43pm" text = "doing?" image = {faker.image.avatar()}/>

            </ApprovalCard>
            
        </div>
    ) ;
}

ReactDOM.render(<App /> , document.querySelector('#root'));