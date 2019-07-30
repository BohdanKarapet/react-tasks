import React from 'react';

const userOutput = (props) => {
    const userOutputStyles = {
        textAlign: 'center',
        margin: '16px auto',
        fontSize: '20px'
    };

    return (
        <div style={userOutputStyles}>
            <p>{props.children}{props.name}</p>
            <p>Paragraph with static text!</p>
        </div>
    );
};

export default userOutput;