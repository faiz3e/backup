//load more logic
import React, { Component } from 'react';
export class Fotter extends Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.rec = [{ name: 'a', number: 82, percentage: 45, count: 1 },
    { name: 'b', number: 12, percentage: 76, count: 3 },
    { name: 'c', number: 1, percentage: 86, count: 4 },
    { name: 'd', number: 155, percentage: 96, count: 6 },
    { name: 'e', number: 155, percentage: 96, count: 6 },
    { name: 'f', number: 155, percentage: 96, count: 6 },
    { name: 'g', number: 155, percentage: 96, count: 6 },
    { name: 'h', number: 155, percentage: 96, count: 6 },
    { name: 'i', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'eeeee', number: 82, percentage: 45, count: 1 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
    { name: 'ddddd', number: 155, percentage: 96, count: 6 },
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
    { name: 'mlast', number: 22, percentage: 65, count: 2 }];
    this.toshowrec = [];
    this.count = 0;
    this.counter = 10;
  }

  show() {
    var rec = this.rec;
    var count = this.count
    console.log(this.toshowrec, "this.toshowre");

    for (var i = count; i < count + this.counter; i++) {
      if (rec[i] !== undefined) {
        this.toshowrec.push(rec[i]);
        console.log(count);
      } else {
        console.log("full");
        document.getElementById('id').style.visibility = 'hidden';
      }
    }

    this.count += this.counter;
    this.setState({
      toshowre: this.rec,
      count: this.count
    });


    console.log(this.counter, "current count");
  }
  render() {
    return (
      <div id="footer">
        {this.toshowrec.map((list, i) => {
          return <p key={i}> <li> {list.name} {list.number}{list.percentage} {list.count}  </li></p>
        })}


        <button id="id" onClick={this.show}>Fotter sec </button>
      </div>

    );
  }
}
