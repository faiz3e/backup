import React, { Component } from 'react';

export class Rightpanel extends Component {
  constructor(props) {
    super(props);

    this.state = {isToggleOn: true}
   this.handleClick = this.handleClick.bind(this);

 }
 handleClick(){
     this.setState(prevState => ({
       isToggleOn: !prevState.isToggleOn
     }));
   }
  render() {
    if(this.isToggleOn===true){
      this.isToggleOn=console.log("shoud hide");
    }else {
    this.isToggleOn=console.log("clicked");
    }
    return (
      <div className="Rightpanel">
RIGHTPANEL
       <button style={{visibility: this.state.isToggleOn ? 'visible' : 'hidden' }} onClick={this.handleClick}>Hello </button>
      </div>
    );
  }
}
