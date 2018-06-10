import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import RedirectPublicRoute from './RedirectPublicRoute'
import Error from './Error'


class Signup extends Component {

    state = {
        err: false
    }

    onSubmit(e) {
        e.preventDefault();

        let email = e.target.email.value.trim();
        let password = e.target.password.value.trim();

        Accounts.createUser({email, password}, (err) => {
            if(err){
                this.setState({ err: err.reason })
            }else{
                console.log('Signed up')
            }
        });

    }

    render() {
        return (
            <div className='center'>
                <RedirectPublicRoute history={this.props.history}/>
                <h2>Signup</h2>
                <form className="col s12" onSubmit={this.onSubmit}>
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate" required/>
                        <label htmlFor="first_name">First name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" required/>
                        <label htmlFor="last_name">Last name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate" required/>
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="password" type="password" className="validate" required/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="password_check" type="password" className="validate" required/>
                        <label htmlFor="password_check">Repeat password</label>
                    </div>
                    <button className="waves-effect waves-light btn">Signup</button>
                </form>
                {this.state.err && <Error err={this.state.err}/>}
            </div>
        );
    }
}

export default Signup;