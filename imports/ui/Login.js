import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Meteor } from 'meteor/meteor';
import RedirectPublicRoute from './RedirectPublicRoute'
import Error from './Error'

export default class Login extends React.Component {
    state = {
        err: false
    }

    onSubmit(e) {
        e.preventDefault();

        let email = e.target.email.value.trim();
        let password = e.target.password.value.trim();

        Meteor.loginWithPassword({email}, password, (err) => {
            if(err){
                this.setState({ err: err.reason })
            }
        });

    }

    render(){
        return (
            <div className='center'>
                <RedirectPublicRoute history={this.props.history}/>
                <h2>Login</h2>
                <form className="col s12" onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate" required/>
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="password" type="password" className="validate" required/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="waves-effect waves-light btn">Login</button>
                </form>
                <br/>
                <Link to='/signup'>Don't have an account?</Link>
                {this.state.err && <Error err={this.state.err}/>}
            </div>
        )
    }
}