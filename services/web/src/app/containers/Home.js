// Libs
import React, { Component } from 'react';
// Components
import Header from './Header.js';
import HomeSupporting from './HomeSupporting.js';
// var main = function() {
// 	$('.nav li').click(function() {
//     var category = $(this).attr('class');
//     $('.nav li').removeClass('active');
//     $(this).addClass('active');
//
//     if(category === 'nav-consumer') {
//       $('.thumbnail').removeClass('selected');
//       $('.consumer').addClass('selected');
//     }
//     else if(category === 'nav-mobile') {
//       $('.thumbnail').removeClass('selected');
//       $('.mobile').addClass('selected');
//     }
//     else if(category ==='nav-commerce') {
//       $('.thumbnail').removeClass('selected');
//       $('.commerce').addClass('selected');
//     }
//     else if(category ==='nav-enterprise') {
//       $('.thumbnail').removeClass('selected');
//       $('.enterprise').addClass('selected');
//     }
//     else if(category ==='nav-all') {
//       $('.thumbnail').removeClass('selected');
//     }
//   });
// };

export default class Home extends Component {
	render() {
		return(
			<div className='armandoperez'>
				<Header />
				<HomeSupporting />
			</div>
		);
	}
}
