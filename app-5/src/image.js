import React, { Component } from 'react';


export default class image extends Component {
    render(){
        return(
            <div className = "imageOutter">
                <img src={this.props.url} />
            </div>
        )
    }
}


