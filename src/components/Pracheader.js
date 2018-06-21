import React, { Component } from 'react';
import {Page1} from './Page1';
import {Page2} from './Page2';
import {Page3} from './Page3';
import {Home} from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export class Pracheader extends Component {
render() {
    return (
    <div className="App">
this is Home2
<Router>
                <div>
                
                    <nav className="navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <a class="navbar-brand" href="">WebSiteName</a>
                            </div>
                            <ul class="nav navbar-nav">
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/Page1'}>Page1</Link></li>
                                <li><Link to={'/Page2'}>Page2</Link></li>
                                <li><Link to={'/Page3'}>Page3</Link></li>
                            </ul>
                        </div>
                    </nav>
                    
                <div id="allfloat">
           
                    <Switch>
                        <div id="pages">
                        <Route exact path='/' component={Home} />
                        <Route path='/Page1' component={Page1} />
                        <Route path='/Page2' component={Page2} />
                        <Route path='/Page3' component={Page3} />
                        </div>
                    </Switch>
                    <div id="pages">
                    page3
                    </div>
                </div>
                </div>
            </Router>
    </div>
    );
}
}


