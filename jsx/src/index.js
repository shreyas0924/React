import React from 'react';
import ReactDom from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

function App(){
    
    return <input type="number"  min = {5} />
}

root.render(<App />);

