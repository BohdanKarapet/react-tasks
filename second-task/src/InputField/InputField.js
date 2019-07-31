import React from 'react';

const inputField = (props) => {
    return (
        <input
            type="text"
            onChange={props.changed}
            value={props.textInInput} />
    );
};

export default inputField;