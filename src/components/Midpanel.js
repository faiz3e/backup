import React, { Component } from 'react';
import {Page1} from './Page1';
import {Page2} from './Page2';
import {Page3} from './Page3';

import {Fotter} from './Fotter';
import {Grid,Row,Col} from 'react-bootstrap';


export class Midpanel extends Component {

    render() {
      var A=this.props.mid;
            return (
<div >
    <p>midpanel</p>
    <A/>
    </div>
    );
    }
}
