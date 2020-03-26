import React, { Fragment, useContext } from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomContext } from '../context';
import Loading from '../components/Loading';

const RoomsContainer = () => {
	const value = useContext(RoomContext);
	const { loading, sortedRooms, rooms } = value;

	if (loading) {
		return <Loading />;
	}

	return (
		<Fragment>
			<RoomsFilter rooms={rooms} />
			<RoomsList rooms={sortedRooms} />
		</Fragment>
	);
};

export default RoomsContainer;
