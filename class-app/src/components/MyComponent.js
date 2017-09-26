import React from 'react';

export default class MyComponent extends React.Component {
    render() {
        return <h1>Hello, class - {this.props.name}</h1>
    }
}