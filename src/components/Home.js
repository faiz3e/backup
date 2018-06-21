import React, { Component } from 'react';
import {Leftpanel} from './Leftpanel';
import {Rightpanel} from './Rightpanel';
import {Header} from './Header';
import {Midpanel} from './Midpanel';
import {Fotter} from './Fotter';
import {Grid,Row,Col} from 'react-bootstrap';


export class Home extends Component {
  constructor(props) {
        super(props);
this.state={content:"Leftpanel"}
}
onChangelink(newlink){
this.state({
  content:newlink
});

}


  render() {
  console.log(this.state.content,"this.state");
    return (
      <div className="home">
      <Header greet={this.onGreet}/>
       <Col xs={2} sm={2} lg={2}>
<Leftpanel/>
</Col>
   <Col xs={8} sm={8} lg={8}>
{/* <div className="Midpanel">mid section<Midpanel onChange={this.onChangelink.bind(this)}/></div> */}
<Midpanel/>
</Col>
   <Col xs={2} sm={2} lg={2}>

<Rightpanel/>
</Col>

<Col xs={12} sm={12} lg={12}>
<Fotter/>
</Col>
      </div>
    );
  }
}
