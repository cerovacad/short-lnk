import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class RedirectPrivateRoute extends React.Component {

    componentWillMount() {
        if(!Meteor.userId()){
            this.props.history.replace('/')
        }
    }

    render(){
        return (
            <div hidden></div>
        )
    }
}