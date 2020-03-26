import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = props => {
	return (
		<Fragment>
			<Hero hero='defaultHero'>
				<Banner
					title='Luxurious Rooms'
					subtitle='Deluxe rooms starting at $299'
				>
					<Link to='/rooms' className='btn-primary'>
						Our Rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRooms />
		</Fragment>
	);
};

Home.propTypes = {};

export default Home;
