//loadmore function as well as pagination
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Fade } from 'react-bootstrap';
export class Loadmore extends Component {
  constructor(props) {
    super(props);

    this.rec = [{ name: 'a', number: 82, percentage: 45, count: 1 },
    { name: 'b', number: 12, percentage: 76, count: 3 },
    { name: 'c', number: 1, percentage: 86, count: 4 },
    { name: 'd', number: 155, percentage: 96, count: 6 },
    { name: 'e', number: 155, percentage: 96, count: 6 },
    { name: 'f', number: 155, percentage: 96, count: 6 },
    { name: 'g', number: 155, percentage: 96, count: 6 },
    { name: 'h', number: 155, percentage: 96, count: 6 },
    { name: 'i', number: 155, percentage: 96, count: 6 },
    { name: 'j', number: 155, percentage: 96, count: 6 },
    { name: 'k', number: 155, percentage: 96, count: 6 },
    { name: 'l', number: 155, percentage: 96, count: 6 },
    { name: 'm', number: 155, percentage: 96, count: 6 },
    { name: 'n', number: 155, percentage: 96, count: 6 },
    { name: 'o', number: 155, percentage: 96, count: 6 },
    { name: 'p', number: 82, percentage: 45, count: 1 },
    { name: 'q', number: 155, percentage: 96, count: 6 },
    { name: 'r', number: 155, percentage: 96, count: 6 },
    { name: 's', number: 155, percentage: 96, count: 6 },
    { name: 't', number: 155, percentage: 96, count: 6 },
    { name: 'u', number: 155, percentage: 96, count: 6 },
    { name: 'v', number: 155, percentage: 96, count: 6 },
    { name: 'w', number: 155, percentage: 96, count: 6 },
    { name: 'x', number: 155, percentage: 96, count: 6 },
    { name: 'y', number: 155, percentage: 96, count: 6 },
    { name: 'z', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'aaaa', number: 22, percentage: 65, count: 2 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'cccccc', number: 12, percentage: 76, count: 3 },
    { name: 'lastrec', number: 22, percentage: 65, count: 2 }];
    this.toshowrec = [];
    this.show = this.show.bind(this);

    this.count = 0;
    this.counter = 25;
    this.counterforpage = [];
    this.navclknext = this.navclknext.bind(this);
    this.navclkprev = this.navclkprev.bind(this);
    this.onnumberclick = this.onnumberclick.bind(this);
    this.state = { isToggleOn: true, currentpage: 1, isToggleOnnext: true, isToggleOnprev: false }

  }


  navclkprev(event) {
    if (this.state.currentpage !== 1) {
      var currentpage1 = Number(this.state.currentpage) - 1;
      this.setState({
        currentpage: currentpage1
      });
      this.onnumberclick(currentpage1)
    }
  }

  navclknext(event) {
    var currentpage1 = Number(this.state.currentpage) + 1;
    this.setState({
      currentpage: currentpage1
    });
    this.onnumberclick(currentpage1)
    console.log(this.state.currentpage, "");
  }


  onnumberclick(event) {
    if (Number.isInteger(event)) {
      var events = event
      var clicked = (event - 1) * this.counter;
    } else {
      var events = event.target.value
      var clicked = (event.target.value - 1) * this.counter;
    }
    var currentpage = this.state.currentpage;
    var rec = this.rec;
    var count = this.count + clicked;
    var j = 0;
    for (var i = clicked; i < clicked + this.counter; i++) {
      if (rec[i] !== undefined) {
        this.toshowrec[j] = rec[i];
      } j++;
    }
    if (count >= this.rec.length){
      this.isToggleOnnext=false;
    }else{
      this.isToggleOnnext=true;
    }
    if(count > this.counter) {
      this.isToggleOnprev=true;
    } else {
      this.isToggleOnprev=false;
    }
    this.setState({
      toshowre: this.rec,
      count: this.count,
      currentpage: events,
      isToggleOnnext:this.isToggleOnnext,
      isToggleOnprev: this.isToggleOnprev
    });
  }



    componentDidMount() {
      this.show();
    }
    show() {
      var rec = this.rec;
      var count = this.count
      console.log(this.toshowrec, "this.toshowre");
      for (var i = count; i < count + this.counter; i++) {
        if (rec[i] !== undefined) {
          this.toshowrec.push(rec[i]);
          console.log(count);
        }
      }
      this.count += this.counter;
      this.setState({
        toshowre: this.rec,
        count: this.count
      });
      console.log(this.state.isToggleOn, "current isToggleOn");
      if (this.count >= 100) {
        this.setState({
          isToggleOn: !this.state.isToggleOn
        });
      }
    }

    render() {
      for (var i = 0; i < (this.rec.length / this.counter); i++) {
        this.counterforpage[i] += i
      }
      return (
        <div>
          <table className="table table-responsive table-condensed table-striped table-bordered">
            <thead >
              <tr>
                <td>Name</td>
                <td>number</td>
                <td>Percentage</td>
                <td>Count</td>
              </tr>
            </thead>
            <tbody>
              {this.toshowrec.map((list, i) => {
                return <tr key={i}>
                  <td> {list.name} </td>
                  <td>{list.number}</td>
                  <td>{list.percentage}</td>
                  <td>{list.count}</td>
                </tr>
              })}
            </tbody>
          </table>
          <div id="pagination"> <Button id="id" style={{ visibility: this.state.isToggleOn ? 'visible' : 'hidden' }} onClick={this.show}>Load More.. </Button>
            <Button onClick={this.navclkprev.bind(this)} style={{ visibility: this.state.isToggleOnprev ? 'visible' : 'hidden' }}> 	&#8592;  </Button>{this.counterforpage.map((list, i) => {
              return <li key={i}>
                <Button value={i + 1} onClick={this.onnumberclick.bind(this)}>{i + 1}</Button></li>
            })}
            <Button onClick={this.navclknext.bind(this)} style={{ visibility: this.state.isToggleOnnext ? 'visible' : 'hidden' }}> &#8594; </Button></div>
        </div>
      );
    }
  }
