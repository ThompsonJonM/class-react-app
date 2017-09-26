import React from 'react';

export default class Friends extends React.Component {
    render(props) {
        return (
            <div>
                <h1>{this.props.username}</h1>
                <h3>{this.props.name}</h3>
                <br />
                <p>{this.props.description}</p>
            </div>
        );
    }
}