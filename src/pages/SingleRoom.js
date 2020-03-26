import React, { useState, useEffect, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

const SingleRoom = ({ match }) => {
	const [data, setImage] = useState({
		slug: match.params.slug,
		defaultBcg
	});

	let { getRoom } = useContext(RoomContext);

	const room = getRoom(data.slug);
	console.log(room);

	const handleSetImage = e => {};

	if (!room) {
		return (
			<div className='error'>
				<h3>no room found</h3>
				<Link to='/rooms' className='btn-primary'>
					Back to Rooms
				</Link>
			</div>
		);
	}

	const {
		name,
		description,
		capacity,
		size,
		price,
		extras,
		breakfast,
		pets,
		images
	} = room;

	const [mainImg, ...rest] = images;

	return (
		<Fragment>
			<StyledHero img={mainImg}>
				<Banner title={`${name} room`}>
					<Link to='/rooms' className='btn-primary'>
						Back to rooms
					</Link>
				</Banner>
			</StyledHero>
			<section className='single-room'>
				<div className='single-room-images'>
					{rest.map((image, index) => (
						<img key={index} src={image} alt={name} />
					))}
				</div>
				<div className='single-room-info'>
					<article className='desc'>
						<h3>details</h3>
						<p>{description}</p>
					</article>
					<article>
						<h3>Info</h3>
						<h6>Price : ${price}</h6>
						<h6>Size : {size} SQFT</h6>
						<h6>
							Max Capacity :{' '}
							{capacity > 1 ? `${capacity} people` : `${capacity} person`}
						</h6>
						<h6>{pets ? 'Pets Allowed' : 'No Pets Allowed'}</h6>
						<h6>{breakfast && 'Free Breakfast included'}</h6>
					</article>
				</div>
			</section>
			<section className='room-extras'>
				<h6>extras</h6>
				<ul>
					{extras.map((extra, index) => {
						return <li key={index}>{extra}</li>;
					})}
				</ul>
			</section>
		</Fragment>
	);
};

SingleRoom.propTypes = {
	match: PropTypes.object
};

export default SingleRoom;
