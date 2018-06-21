import React, { Component } from 'react';
import {Grid,Row,Col,MenuItem,DropdownButton} from 'react-bootstrap';
export class Page3 extends Component {
  constructor(props) {
  super(props);
  this.state = {
  data: null,
  per:null
}
}
 componentDidMount() {
 return fetch('http://localhost:4000/db')
 .then((response) => response.json())
 .then((responseJson) => {
 this.setState({
 data:responseJson.user
 })
 this.setState({
 per:responseJson.user
 })
 })
 }

  render() {
    return (
      <div className="center-content">page3
this is page 3 <br/>
username password
{
  this.state.data && this.state.data.map((dynamicData,i)=>
<div>
 <pre>{dynamicData.user_name}  {dynamicData.password}</pre>

 </div>
)}

      </div>
    );
  }
}
