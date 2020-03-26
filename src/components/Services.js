import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

const Services = props => {
	const [services] = useState([
		{
			icon: <FaCocktail />,
			title: 'Free Cocktails',
			info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			icon: <FaHiking />,
			title: 'Endless Hiking',
			info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			icon: <FaShuttleVan />,
			title: 'Free Shuttle',
			info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			icon: <FaBeer />,
			title: 'Strongest Beer',
			info:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
	]);

	return (
		<section className='services'>
			<Title title='services' />
			<div className='services-center'>
				{services.map((service, index) => (
					<article key={index} className='service'>
						<span>{service.icon}</span>
						<h6>{service.title}</h6>
						<p>{service.info}</p>
					</article>
				))}
			</div>
		</section>
	);
};

Services.propTypes = {};

export default Services;
