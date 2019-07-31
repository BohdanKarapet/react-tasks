import React from 'react';

const validationComponent = (props) => {
    const positiveResult = "Text long enough",
        negativeResult = "Text to short";

    let result;

    if (props.inputedLength >= props.minTextLength) {
        result = positiveResult;
    } else {
        result = negativeResult;
    }

    return (
        <p>{result}</p>
    );
};

export default validationComponent;