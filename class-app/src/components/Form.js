import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInputChange = (event) => {

        // console.log(event);

        // Destructured: Replaced var name = event.name
        // and var value = event.value with const{name, value} = event.target
        const {name, value} = event.target;

        // console.log('I have been called!');

        // let newState = {};
        // newState[name] = value;
        // this.setState(newState)

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>

                <h1>{this.state.username}</ h1>

                <input 
                    name='username'
                    placeholder='Enter a username'
                    onChange={this.handleInputChange} 
                />

                <input 
                    name='password'
                    placeholder='Enter a password'
                    onChange={this.handleInputChange} 
                />
            </div>
        )
    }
}