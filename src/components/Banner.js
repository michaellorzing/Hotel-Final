import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ title, subtitle, children }) => {
	return (
		<div className='banner'>
			<h1>{title}</h1>
			<div></div>
			<p>{subtitle}</p>
			{children}
		</div>
	);
};

Banner.propTypes = {};

export default Banner;
