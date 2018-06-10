import React, { Component } from 'react';


export default class Error extends React.Component {
    render(){
        return (
            <div className="card-panel red lighten-1">
                <span className="white-text">{this.props.err}</span>
            </div>
        )
    }
}