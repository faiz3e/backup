import React, { Component } from 'react';
import {Navbar,NavItem,NavDropdown,MenuItem,Nav,Button} from 'react-bootstrap';
export class Header extends Component{
  constructor(props){
super();
 this.navclk=this.navclk.bind(this);

}
  navclk(temp){
console.log(temp);
  }
render(){

  return(

    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Krx Ecom</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <input  type= "button" value="page1"  onClick={this.navclk.bind(this,"page1")} className="active" eventKey={1} href="#"/>

          <input  type= "button" value ="page2" onClick={this.navclk.bind(this,"page2")} eventKey={2} href="#" />

          <input  type= "button" value ="page3"   onClick={this.navclk.bind(this,"page3")} eventKey={2} href="#"/>


          <input  type= "button" value ="page4" onClick={this.navclk.bind(this,"page4")} eventKey={2} href="#"/>



        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
          Profile
          </NavItem>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}
}
