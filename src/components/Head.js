//working header which on click sends the respective class as  arguments on function name "change"
import React, { Component } from 'react';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page3 } from './Page3';
import { Page4 } from './Page4';
import { Page5 } from './Page5';
import { Page6 } from './Page6';
import { Page7 } from './Page7';
import { Page8 } from './Page8';
import { Page9 } from './Page9';
import { Page10 } from './Page10';
import { Page11 } from './Page11';
import { Midpanel } from './Midpanel';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Leftpanel } from './Leftpanel';
import { Rightpanel } from './Rightpanel';
import {Modalview} from './Modalview';

export class Head extends Component {
    constructor(props) {
        super();
        this.state = {
            link: Page1
        };
    }
    onchangelink(temp) {
        console.log(temp, "event");
        // console.log(this.state.link,"event in head");
        //  this.props.change(this.state.link);
        var sec = this.state.link;

        if (temp === "page1") {
            this.state.link = Page1;
        }else if (temp === "page2") {
            this.state.link = Page2;
        }
        else if (temp === "page3") {
            this.state.link = Page3;
        }
        else if (temp === "page4") {
            this.state.link = Page4;
        }
        else if (temp === "page5") {
            this.state.link = Page5;
        }
        else if (temp === "page6") {
            this.state.link = Page6;
        }
        else if (temp === "page7") {
            this.state.link = Page7;
        }
        else if(temp === "page8"){
            this.state.link = Page8;
        }
        else if(temp === "page9"){
            this.state.link = Page9;
        }
        else if(temp === "page10"){
            this.state.link = Page10;
        }
        else if(temp === "page11"){
            this.state.link = Page11;
        }
        console.log(this.state.link, "link");
        this.props.change(this.state.link);


    }

    render() {
        return (
            <div >


                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Krx Ecom</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <input type="button" value="Dashboard" onClick={this.onchangelink.bind(this,"page1")} className="active" eventKey={1} href="#" />

                            <input type="button" value="Events" onClick={this.onchangelink.bind(this,"page2")} eventKey={2} href="#" />

                            <input type="button" value="Members" onClick={this.onchangelink.bind(this,"page3")}  href="#" />

                            <input type="button" value="Notification" onClick={this.onchangelink.bind(this,"page4")}  href="#" />

                            <input type="button" value="Expenses" onClick={this.onchangelink.bind(this,"page5")}  href="#" />

                            <input type="button" value="Documentaions" onClick={this.onchangelink.bind(this,"page6")} href="#" />

                            <input type="button" value="Rent" onClick={this.onchangelink.bind(this,"page7")} href="#" />

                              <input type="button" value="Emergency numbers" onClick={this.onchangelink.bind(this,"page8")}  href="#" />

                                <input type="button" value="Profile" onClick={this.onchangelink.bind(this,"page9")}  href="#" />

                              <input type="button" value="Calendar" onClick={this.onchangelink.bind(this,"page10")}  href="#" />

                              <input type="button" value="Workers" onClick={this.onchangelink.bind(this,"page11")}  href="#" />
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                <Modalview/>
    </NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>


        );
    }
}
