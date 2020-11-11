import React from 'react';
import './App.css';
import WilliamsSonoma from './Components/WilliamsSonom/WilliamsSonoma'

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = { }
  }

  render() {
    return(
      <div>
        <WilliamsSonoma />
      </div>
    )
  }
}
