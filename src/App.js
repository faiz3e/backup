import React, { Component } from 'react';
import  {Home} from './components/Home';
import  {Test} from './components/Test';
import {Grid,Row,Col} from 'react-bootstrap';
//import Filt from './Filt'
import {Header} from './components/Header';
import {Fotter} from './components/Fotter';
import './App.css';

class App extends Component {
  constructor(props) {
       super(props);

       this.state = {
         title:"Login"

       };
   }
   componentDidMount() {

    }

  render(props) {
    return (
      <div>

                         {React.cloneElement(this.props.children, {
                               title: this.state.title
                         })}  </div>
    );
  }
}

export default App;
