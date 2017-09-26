import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()}
    }

    render() {
        return <h1>{this.state.time.toLocaleTimeString()}</h1>;
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({time: new Date()});
    }
}