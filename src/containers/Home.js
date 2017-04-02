// Libs
import React, { Component } from 'react';
// Components
import Header from './Header.js';
import HomeSupporting from './HomeSupporting.js';

export default class Home extends Component {
	// var main = function() {
	// 	$(css.nav).click(function() {
	//     var category = $(this).attr('class');
	//     					-> this.getAttribute('tabindex');
	//
	    // $(css.nav).removeClass('active'); ->
// JQUERY
// $(el).removeClass(className);
// ->
// IE8+
// if (el.classList)
//   el.classList.remove(className);
// else
//   el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
//
	//     $(this).addClass('active');
	//
	//     if(category === 'navConsumer') {
	//       $(css.thumbnail).removeClass('selected');
	//       $(css.consumer).addClass('selected');
	//     }
	//     else if(category === 'navMobile') {
	//       $(css.thumbnail).removeClass('selected');
	//       $(css.mobile'.mobile').addClass('selected');
	//     }
	//     else if(category ==='navCommerce') {
	//       $(css.thumbnail).removeClass('selected');
	//       $(css.commerce'.commerce').addClass('selected');
	//     }
	//     else if(category ==='navEnterprise') {
	//       $(css.thumbnail).removeClass('selected');
	//       $(css.enterprise'.enterprise').addClass('selected');
	//     }
	//     else if(category ==='navAll') {
	//       $(css.thumbnail).removeClass('selected');
	//     }
	//   });
	// };
	render() {
		return(
			<div className='armandoperez'>
				<Header />
				<HomeSupporting />
			</div>
		);
	}
}
