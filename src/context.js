import React, { useState, useEffect } from 'react';
import items from './data';

const RoomProvider = ({ children }) => {
	const [data, setData] = useState({
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true,
		type: 'all',
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		breakfast: false,
		pets: false
	});

	useEffect(() => {
		let rooms = formatData(items);
		let maxPrice = Math.max(...rooms.map(item => item.price));
		let maxSize = Math.max(...rooms.map(item => item.size));
		let featuredRooms = rooms.filter(room => room.featured === true);
		setData({
			rooms,
			featuredRooms,
			sortedRooms: rooms,
			loading: false,
			price: maxPrice,
			maxPrice,
			maxSize
		});
	}, []);

	const formatData = items => {
		let tempItems = items.map(item => {
			let id = item.sys.id;
			let images = item.fields.images.map(image => image.fields.file.url);

			let room = { ...item.fields, images, id };
			return room;
		});
		return tempItems;
	};

	const getRoom = slug => {
		let tempRooms = [...data.rooms];
		let roomSlug = tempRooms.find(room => room.slug === slug);
		return roomSlug;
	};

	const handleChange = e => {
		const target = e.target;
		const name = e.target.name;
		const value = e.type === 'checkbox' ? target.checked : target.value;
		setData({
			...data,
			[name]: value
		});
		filterRooms();
	};

	const filterRooms = () => {
		console.log('hello');
	};

	return (
		<RoomContext.Provider
			value={{ ...data, getRoom, handleChange, filterRooms }}
		>
			{children}
		</RoomContext.Provider>
	);
};

export const RoomContext = React.createContext();
export const RoomConsumer = RoomContext.Consumer;

export default RoomProvider;
