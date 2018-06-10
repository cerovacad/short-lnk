import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class RedirectPubliceRoute extends React.Component {

    componentWillMount() {
        if(Meteor.userId()){
            this.props.history.replace('/link')
        }
    }

    render(){
        return (
            <div hidden></div>
        )
    }
}