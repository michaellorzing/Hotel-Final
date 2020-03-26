import React from 'react';
import PropTypes from 'prop-types';
import Room from './Room';

const RoomsList = ({ rooms }) => {
	if (rooms.length === 0) {
		return (
			<div className='empty search'>
				<h3>Unfortunately, no rooms match your search parameters</h3>
			</div>
		);
	}

	return (
		<section className='roomslist'>
			<div className='roomslist-center'>
				{rooms.map((room, index) => {
					return <Room key={room.id} room={room} />;
				})}
			</div>
		</section>
	);
};

RoomsList.propTypes = {
	rooms: PropTypes.array
};

export default RoomsList;
