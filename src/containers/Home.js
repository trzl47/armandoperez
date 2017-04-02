var React = require('react');
import '../../../../../styles/bootstrap-3.3.6-dist/css/bootstrap.min.css';
import './armandoPerez.css';

var ArmandoPerez = React.createClass({
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
	render: function() {
	return(
		<div className={["armandoperez"].join(' ')}>
			<div className={["header"].join(' ')}>
			  	<div className={["container"].join(' ')}>
						<div className={["row"].join(' ')}>
					  		<div className="col-md-4">
								<h1>Armando P&eacute;rez</h1>
					  		</div>

					  		<div className="pull-right">
									<ul className={["nav"].join(' ')}>
									  	<li className={["nav-all","active"].join(' ')}><a href="#">All</a></li>
									  	<li className={["nav-consumer"].join(' ')}><a href="#">Consumer</a></li>
									  	<li className={["navMobile"].join(' ')}><a href="#">Mobile</a></li>
									  	<li className={["navCommerce"].join(' ')}><a href="#" >Commerce</a></li>
									  	<li className={["navEnterprise"].join(' ')}><a href="#">Enterprise</a></li>
									</ul>
					  		</div>
						</div>
			  	</div>
			</div>

			<div className="main">
			  	<div className={["container"].join(' ')}>
						<div className={["row"].join(' ')}>
					  		<div className="col-md-4">
									<a className={["consumer","thumbnail"].join(' ')}><img alt='' role='presentation' src={"https://s3.amazonaws.com/codecademy-content/projects/2/armando-perez/p1.jpg"} /></a>
					  		</div>
					  		<div className="col-md-4">
									<a className={["enterprise","thumbnail"].join(' ')}><img alt='' role='presentation' src={"https://s3.amazonaws.com/codecademy-content/projects/2/armando-perez/p2.jpg"} /></a>
					  		</div>
						  	<div className="col-md-4">
									<a className={["consumer","thumbnail"].join(' ')}><img alt='' role='presentation' src={"https://s3.amazonaws.com/codecademy-content/projects/2/armando-perez/p3.jpg"} /></a>
						  	</div>
						</div>

						<div className={["row"].join(' ')}>
						  	<div className="col-md-4">
									<a className={["commerce","thumbnail"].join(' ')}><img alt='' role='presentation' src={"https://s3.amazonaws.com/codecademy-content/projects/2/armando-perez/p4.jpg"} /></a>
						  	</div>
						  	<div className="col-md-4">
									<a className={["enterprise","thumbnail"].join(' ')}><img alt='' role='presentation' src={"https://s3.amazonaws.com/codecademy-content/projects/2/armando-perez/p5.jpg"} /></a>
						  	</div>
						 	<div className="col-md-4">
								<a className={["mobile","thumbnail"].join(' ')}><img alt='' role='presentation' src={"https://s3.amazonaws.com/codecademy-content/projects/2/armando-perez/p6.jpg"} /></a>
						  	</div>
						</div>

						<div className={["row"].join(' ')}>
						  	<div className="col-md-4">
									<a className={["mobile","thumbnail"].join(' ')}><img alt='' role='presentation' src={"https://s3.amazonaws.com/codecademy-content/projects/2/armando-perez/p7.jpg"} /></a>
						  	</div>
						  		<div className="col-md-4">
										<a className={["commerce","thumbnail"].join(' ')}><img alt='' role='presentation' src={"https://s3.amazonaws.com/codecademy-content/projects/2/armando-perez/p8.jpg"} /></a>
						  	</div>
						  	<div className="col-md-4">
									<a className={["mobile","thumbnail"].join(' ')}><img alt='' role='presentation' src={"https://s3.amazonaws.com/codecademy-content/projects/2/armando-perez/p9.jpg"} /></a>
						  	</div>
						</div>
			  	</div>
			</div>
		</div>
	);
}
});
module.exports = ArmandoPerez;
