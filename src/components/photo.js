// Libs
import React from 'react';

// Components
import NavLink from '../../NavLink';

const Photo = props => (
	<NavLink to={props.path}>
		<img src={props.img}
			className={[props.className,"thumbnail"].join(' ')}
			alt={props.desc}
			role='presentation' />
	</NavLink>
);

export default Photo;
