import React, { Component } from 'react';
import { Leftpanel } from './Leftpanel';
import { Header } from './Header';
import { Fotter } from './Fotter';
import { Fade,Button } from 'react-bootstrap';
import { Rightpanel } from './Rightpanel';
export class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, isToggleOnPanel: false }
    this.handleClick = this.handleClick.bind(this);
    this.opt1 = this.opt1.bind(this);
    this.opt2 = this.opt2.bind(this);
    this.opt3 = this.opt3.bind(this);
    this.opt4 = this.opt4.bind(this);
    var show = true;
    var a = "";
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  opt1() {
    this.setState(prevState => ({
      isToggleOnPanel: !prevState.isToggleOnPanel, isToggleOnPanel2: false, isToggleOnPanel3: false, isToggleOnPanel4: false
    }));
  }
  opt2() {
    this.setState(prevState => ({
      isToggleOnPanel2: !prevState.isToggleOnPanel2, isToggleOnPanel: false, isToggleOnPanel3: false, isToggleOnPanel4: false
    }));
  }
  opt3() {
    this.setState(prevState => ({
      isToggleOnPanel3: !prevState.isToggleOnPanel3, isToggleOnPanel: false, isToggleOnPanel2: false, isToggleOnPanel4: false
    }));
  }
  opt4() {
    this.setState(prevState => ({
      isToggleOnPanel4: !prevState.isToggleOnPanel4, isToggleOnPanel: false, isToggleOnPanel2: false, isToggleOnPanel3: false
    }));
  }
  render() {
    if (this.flag === true) {
      this.show = <div></div>
    } else {
      this.show = <div>
        <Button className="round-Button-inner" onClick={this.opt1}>opt 1{this.a}</Button><Button className="round-Button-inner" onClick={this.opt2}>opt 2</Button><Button className="round-Button-inner" onClick={this.opt3}>opt 3</Button><Button className="round-Button-inner" onClick={this.opt4}>opt 4</Button>
      </div>
    }
    if (this.flag1 === true) {
      this.showinner1 = <div></div>
    } else {
      this.showinner1 = <div><Leftpanel /></div>
    }
    if (this.flag2 === true) {
      this.showinner2 = <div></div>
    } else {
      this.showinner2 = <div><Header /></div>
    }
    if (this.flag3 === true) {
      this.showinner3 = <div></div>
    } else {
      this.showinner3 = <div><Fotter /></div>
    }
    if (this.flag4 === true) {
      this.showinner4 = <div></div>
    } else {
      this.showinner4 = <div><Rightpanel /></div>
    }
    return (
      <div>
        <Button className="round-Button" onClick={this.handleClick}>+</Button>
        {this.state.isToggleOn ? this.show : this.flag}
        {this.state.isToggleOnPanel ? this.showinner1 : this.flag1}
        {this.state.isToggleOnPanel2 ? this.showinner2 : this.flag2}
        {this.state.isToggleOnPanel3 ? this.showinner3 : this.flag3}
        {this.state.isToggleOnPanel4 ? this.showinner4 : this.flag4}

      </div>
    );
  }
}
