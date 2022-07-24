import React from "react";
import Accordion from "./components/Accordion";


const items = [
    {
        title : 'What is React?',
        content : 'React is a frontend JS library'
    },
    {
        title : 'Why use React?',
        content : 'React is a favourite JS library among engineers '
    },
    {
        title : 'How do you use React',
        content : 'You use React by using components'
    }
];

export default () => {
    return <h1><Accordion items ={items}/> </h1>
};