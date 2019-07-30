import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <input
            className="input"
            type="text"
            onChange={props.changed} />
    );
};

export default userInput;