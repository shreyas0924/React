import React, { useState } from "react";


const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);  // activeIndex is used to keep track of the index and setActiveindex is a function taht we call to update the piece of state
    // null is the default value of useState
    // it can be anything based on what we are passing

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map( (item,index) => {
        return(
            <React.Fragment key={item.title}>
                <div 
                    onClick={() => onTitleClick(index)} 
                    className="title active"
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>

                <div>
                    <div               
                        className="content active"
                    >
                        <p>{item.content}</p>
                    </div>
                </div>
            </React.Fragment>
        ); 
    })

    return <div className="ui styled accordion">
        {renderedItems}
        <h1>{activeIndex}</h1>
    </div>
}

export default Accordion;