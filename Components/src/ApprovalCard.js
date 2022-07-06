import React from "react";


const ApprovalCard = (props) =>{

    return(
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extraContent">  
                <div ui three buttons >
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                    <div className="ui basic black button">Yes</div>
                    <div className="ui basic blue button">No</div>
                </div>
            </div>
        </div>
    );

};

export default ApprovalCard;