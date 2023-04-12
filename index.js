import React from 'react';
import ReactDOM from 'react-dom';

const name = "Derick Howler";
const currentYear = New(Date())

ReactDOM.render(
    <div>
        <P>{name}</P>
        <p>{currentYear}</p>
    </div>,
    document.getElementById('root')
)