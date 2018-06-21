
import React, { Component } from 'react';
//import DividendRow from './DividendRow';
//import Show from './Show';



export class Page5 extends Component {
 constructor() {
 super();
 this.name = this.name.bind(this);
 this.state = {
 lists: [ { name: 'eeeee', number: 82, percentage:45, count:1 },
 { name: 'cccccc', number: 12, percentage:76, count:3 },
 { name: 'bbbbb', number: 1, percentage:86, count:4 },
 { name: 'ddddd', number: 155, percentage:96, count:6 },
 { name: 'aaaa', number: 22, percentage:65, count:2 } ],

 filter: [],
 temp: null,

 }
 }
 name(event) {
 var list = this.state.lists;
 var res;
 console.log(event.target.value);
 var pressed = event.target.value;
 var found = this.state.temp;
 console.log(found);
 if (found === null) {

 this.state.temp = pressed
 console.log(event.target.value, "first time press");
 //res = res + isNaN(pressed);
 if (res !== 0) {
 this.state.lists.sort(function (a, b) {
 if (a[pressed] > b[pressed]) return 1

 else if (a[pressed] < b[pressed]) return -1
 else return 0;

 })

 console.log(list);
 }

 }
 else {


 //console.log(event.target.value,"second time press");
 var found = this.state.temp;
 this.state.temp = null;
 res = res + isNaN(pressed);
 if (res !== 0) {
 //console.log("is alphabet");
 this.state.lists.sort(function (a, b) {
 if (a[pressed] > b[pressed]) return -1
 else if (a[pressed]< b[pressed]) return 1
 else return 0;
 })
 console.log(list);
 }
 }
 this.setState({
 list: this.state.lists
 });

 }



 render() {


 return (
   <div>page5
 <table className="table table-responsive table-condensed table-striped table-bordered">
 <thead >
 <tr>
 <td><button className="btn " value="name" onClick={this.name.bind(this)}>Name</button></td>
 <td><button className="btn " value="number" onClick={this.name.bind(this)}>number</button></td>
 <td><button className="btn" value="percentage" onClick={this.name.bind(this)}>Percentage</button></td>
 <td><button className="btn" value="count" onClick={this.name.bind(this)}>Count</button></td>
 </tr>
 </thead>
 <tbody>
 {this.state.lists.map((list, i) => {
 return <tr key={i}>
 <td> {list.name} </td>
 <td>{list.number}</td>
 <td>{list.percentage}</td>
 <td>{list.count}</td>
 </tr>
 })}
 </tbody>
 </table>
 </div>
 );
 }
}
