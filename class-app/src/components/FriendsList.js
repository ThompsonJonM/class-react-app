import React from 'react';
import Friends from './Friends';

export default class FriendsList extends React.Component {
    render() {
        const content = this.props.friendsArr.map((friend, index) => {
            // Unique ID for react to find location
            return <Friends 
                key = {index} 
                name = {friend.name} 
                username = {friend.username} 
                description = {friend.description} 
            />
        });

        return <div>{content}</div>
    }
}