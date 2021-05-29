/*
 * @Author: your name
 * @Date: 2021-05-20 11:17:32
 * @LastEditTime: 2021-05-20 11:30:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /link-bus-ract-ts/src/components/clock/index.tsx
 */
import React, { Component } from 'react'

export default class Clock extends React.Component{
  
  state={
    minute:60,
    second:60,
    id: null
  }

  start = () => {
    if(this.state.second > 0){
      this.setState({
        minute:this.state.minute,
        second:this.state.second - 1
      }) 
    } else {
       this.setState({
        minute:this.state.minute - 1,
        second:this.state.second + 60
      })
    }
  }

  no(){
    // this.id = setInterval(this.start,1000)
  }

  end(){
    // clearInterval(this.id)
  }

  render(){
    return(
    <>
      <div id="container">
        {this.state.minute} : {this.state.second}
      </div>
    </>
  )}
}
