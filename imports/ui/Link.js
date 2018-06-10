import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import RedirectPrivateRoute from './RedirectPrivateRoute'


export default class Link extends React.Component {

    logout(){
        Accounts.logout((err) => {
            console.log('Logged out', err);
        })
    }

    render(){
        return (
        <div>
            <RedirectPrivateRoute history={this.props.history}/>
            <h1>Link</h1>
            <button className="waves-effect waves-light btn" onClick={this.logout.bind(this)}>Log out</button>
        </div>
        )
    }
}