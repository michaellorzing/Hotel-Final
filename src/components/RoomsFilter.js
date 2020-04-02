import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { RoomContext } from '../context';
import Title from './Title';

const getUnique = (items, desc) => {
	return [...new Set(items.map(item => item[desc]))];
};

const RoomsFilter = ({ rooms }) => {
	const value = useContext(RoomContext);
	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		breakfast,
		pets
	} = value;

	let types = getUnique(rooms, 'type');
	types = ['all', ...types];

	types = types.map((item, index) => (
		<option key={index} value={item}>
			{item}
		</option>
	));

	let people = getUnique(rooms, 'capacity');
	people = people.map((item, index) => (
		<option key={index} value={item}>
			{item}
		</option>
	));

	return (
		<Fragment>
			<section className='filter-container'>
				<Title title='search rooms' />
				<form className='filter-form' onChange={e => handleChange(e)}>
					<div className='form-group'>
						<label htmlFor='type'>room type</label>
						<select name='type' id='type' value={type} className='form-control'>
							{types}
						</select>
					</div>
					<div className='form-group'>
						<label htmlFor='capacity'>capacity</label>
						<select
							name='capacity'
							id='capacity'
							value={capacity}
							className='form-control'
						>
							{people}
						</select>
					</div>
					<div className='form-group'>
						<label htmlFor='price'>room price ${price}</label>
						<input
							type='range'
							name='price'
							min={minPrice}
							max={maxPrice}
							id='price'
							value={price}
							onChange={handleChange}
							className='form-control'
						></input>
					</div>
					<div className='form-group'>
						<div className='single-extra'>
							<input
								type='checkbox'
								name='breakfast'
								id='breakfast'
								checked={breakfast}
								onChange={handleChange}
							/>
							<label htmlFor='breakfast'>breakfast</label>
						</div>
						<div className='single-extra'>
							<input
								type='checkbox'
								name='pets'
								checked={pets}
								onChange={handleChange}
							/>
							<label htmlFor='breakfast'>pets</label>
						</div>
					</div>
				</form>
			</section>
		</Fragment>
	);
};

RoomsFilter.propTypes = {
	rooms: PropTypes.array
};

export default RoomsFilter;
