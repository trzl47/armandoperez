// Libs
import React from 'react';

// Components
import NavLink from './NavLink';

const Photo = props => (
	<NavLink to={props.rte}>
		<img src={props.img}
			className={[props.attr,'thumbnail'].join(' ')}
			alt={props.desc}
			role='presentation' />
	</NavLink>
);

export default Photo;
