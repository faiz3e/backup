import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import {Home2} from './components/Home2';
import {Login} from './components/Login'

class Routes extends Component {

	 requireAuth() {

		// alert(flagL);
		if (true ) {
			alert('success True');
			// browserHistory.push("/");
		}
	}

	render () {
		return (
		     <Router history={ browserHistory }  >
					<Route path="/" component={Login}/>

          <Route path="Login" component={Login} />
          <Route path="Home2" component={Home2} />

			  </Router>
			);
	}
}

export default Routes;
