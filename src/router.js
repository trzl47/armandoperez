// Libs
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './containers/Header.js';
import Home from './containers/Home.js';
import NotFound from './components/NotFound';

// Routes
const routes = (
  <Router>
		<div>
			<Header />
			<Switch>
				<Route exact={true} pattern="/" component={Home} />
				<Route path="*" component={NotFound} />
			</Switch>
		</div>
  </Router>
);

export default routes;
