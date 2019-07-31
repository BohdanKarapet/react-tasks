import React, {Component} from 'react';
import './App.css';

import InputField from './InputField/InputField';
import OutputComponent from './OutputComponent/OutputComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
    state = {
        textInInput: 'I\'m text in input',
        textInInputArr: ["I", "'", "m", " ", "t", "e", "x", "t", " ", "i", "n", " ", "i", "n", "p", "u", "t"],
        inputLength: 17,
        minTextLength: 5
    };

    findLengthHandler = (event) => {
        let value = event.target.value,
            valueArr = value.split('');

        this.setState({
            textInInput: value,
            textInInputArr: valueArr,
            inputLength: valueArr.length
        });
    };

    onClickDeleteHandler = (event, index) => {
        let valueArr = [...this.state.textInInputArr];
        valueArr.splice(index, 1);

        this.setState({
            textInInput: valueArr.join(''),
            textInInputArr: valueArr,
            inputLength: valueArr.length
        });
    };

    render() {
        return (
            <div className="App">
                <InputField
                    changed={(event) => this.findLengthHandler(event)}
                    textInInput={this.state.textInInput}/>
                <OutputComponent length={this.state.inputLength}/>
                <ValidationComponent minTextLength={this.state.minTextLength} inputedLength={this.state.inputLength}/>
                {this.state.textInInputArr.map((character, index) => {
                    return <CharComponent
                        char={character}
                        click={(event) => this.onClickDeleteHandler(event, index)}
                        key={index}/>;
                })}
            </div>
        );
    };
}

export default App;
