import React, { Component } from 'react';
import './App.css';
import UserInput from './userInput/UserInput';
import UserOutput from './userOutput/userOutput';

class App extends Component {
    state = {
        user: {
            name: 'Bohdan'
        }
    };

    changeNameHandler = (event) => {
        this.setState({
            user: {
                name: event.target.value
            }
        });
    }

    render() {
        return (
            <div>
                <UserInput changed={this.changeNameHandler}/>
                <UserOutput name={this.state.user.name}>Hi, </UserOutput>
                <UserOutput name="Other Name" />
            </div>
        );
    }
}

export default App;
