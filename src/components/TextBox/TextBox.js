import React from 'react';
import './TextBox.css';

function TextBox(props)  {
    return (
        <div id="textbox">
            <p>{props.text}</p>
        </div>
    );
    }


export default TextBox;