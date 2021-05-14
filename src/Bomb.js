// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  
  render(){
    const SECONDS_LEFT = this.state.secondsLeft
    if(this.state.secondsLeft === 0){
      return (
        <div>Boom!</div>
        )
    }else{
      return (
        <div>{SECONDS_LEFT} seconds left before I go boom!</div>
      )
    }

  }

}