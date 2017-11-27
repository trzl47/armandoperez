//Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from './containers/Home.js';
import NotFound from '../app/NotFound';

class Main extends Component {
  render() {
		return (
			<div>
			<Switch>
				<Route exact={true} pattern="/" component={Home} />
				<Route path="*" component={NotFound} />
			</Switch>
		</div>
    );
  }
}

export default Main;
