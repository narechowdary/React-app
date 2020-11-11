import React from 'react';
import './App.css';
import Main from './Components/src/Main'

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = { }
  }

  render() {
    return(
      <div>
        {/* Added Product Details main Component */}
        <Main />
      </div>
    )
  }
}
