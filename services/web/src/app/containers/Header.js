// Libs
import React from 'react';

const Header = () => {
		return (
			<header>
			<div className='header'>
				<div className='container'>
					<div className='row'>
						<div className="col-md-4">
							<h1>Armando P&eacute;rez</h1>
						</div>
						<div className="pull-right">
							<nav>
							<ul className="nav nav-pills">
							  <li className="nav-all active"><a href="">All</a></li>
							  <li className="nav-consumer"><a href="">Consumer</a></li>
							  <li className="nav-mobile"><a href="">Mobile</a></li>
							  <li className="nav-commerce"><a href="" >Commerce</a></li>
							  <li className="nav-enterprise"><a href="">Enterprise</a></li>
							</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
			</header>
		);
	}

export default Header;
