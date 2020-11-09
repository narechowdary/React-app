import React from 'react';

export default class Home extends React.Component{
    constructor(){
        super()
        this.state={
            name: ''
        }
    }

    nameChnage = (event) => {
        this.setState({ name: event.target.value})
    }

    render(){
        return(
            <div>
                <h1>Welcome to react App</h1>
                <input type='text' id='name' onChange={this.nameChnage} value={this.state.name}></input>
                <div>
                    <span>{this.state.name}</span>
                </div>
            </div>
        )
    }
}