import React, { Component } from 'react';


export class ChatBox extends Component {
  render() {
    return (
      <div id="chat-box" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <div><p>a</p></div>
      <div style={{display:"flex"}}><button>online(12)</button>
      <input type="text"></input></div>
      </div>

    );
  }
}
