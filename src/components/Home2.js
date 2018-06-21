//dash board passing vaues between child components

import React, { Component } from 'react';
import {Page1} from './Page1';
import {Page2} from './Page2';
import {Page3} from './Page3';
import {Page4} from './Page4';
import {Page5} from './Page5';
import {Page6} from './Page6';
import {Page7} from './Page7';
import {Page8} from './Page8';
import {Page9} from './Page9';
import {Page10} from './Page10';
import {Page11} from './Page11';
import {Midpanel} from './Midpanel';
import {Head} from './Head';
import {Foot} from './Foot';
import {ChatBox} from './ChatBox';
import {Grid,Row,Col} from 'react-bootstrap';
import { Leftpanel } from './Leftpanel';
import { Rightpanel } from './Rightpanel';


export class Home2 extends Component {
    constructor() {
        super();

        this.changelink = this.changelink.bind(this);
        this.state = { currentpage: Page1,left:true,right:true}

}

ToggleContent(){
console.log("toggle");
}

onGreet(){
var left=this.state.left;
var right=this.state.right;
this.setState({
  left:!left,
  right:!right
})
}
changelink(newevent){
    var sec=this.state.currentpage;
    this.state.currentpage=newevent;
    console.log(newevent,"WE are IN ChanGE lINK");
    this.setState({
        sec:sec
    });
}


    render() {
const content=<div>
<Col xs={8} md={8} lg={8}><div id="max-min">
<button onClick={this.onGreet.bind(this)}>toggle</button>
</div>
<Midpanel mid={this.state.currentpage}/>
</Col>
</div>;
const content1=<div>
<Col xs={12} md={12} lg={12} >
<div id="max-min">

<button onClick={this.onGreet.bind(this)}>toggle</button>
</div>
<Midpanel mid={this.state.currentpage}/>
</Col>
</div>;
    return (
    <div>

    <Head change={this.changelink.bind(this)}/>

    <Grid className="container-fluid">
  <Row className="show-grid">

  { this.state.left ?   <Col xs={2} md={2} lg={0}style={{padding:"0px",position:"sticky",top:"0"}} ><Leftpanel/></Col>: null }
    { this.state.right && this.state.left ? content : content1}
    { this.state.right ?   <Col xs={2} md={2} lg={0} style={{padding:"0px" ,position:"sticky",top:"0" }}><Rightpanel/></Col>: null }
<ChatBox/>
   </Row>
   <Foot/>
   </Grid>
    </div>
    );
    }
}
