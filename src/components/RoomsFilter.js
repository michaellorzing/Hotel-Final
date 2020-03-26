import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { RoomContext } from '../context';
import Title from './Title';

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
  
  console.log(value)

	const getUnique = (items, desc) => {
		return [...new Set(items.map(item => item[desc]))];
	};

	let types = getUnique(rooms, 'type');
	types = ['all', ...types];

	return (
		<Fragment>
			<section className='filter-container'>
				<Title title='search rooms' />
				<form className='filter-form'>
					<div className='form-group'>
						<label htmlFor='type'>room type</label>
						<select
							name='type'
							id='type'
							value={type}
							className='form-control'
							onChange={e => handleChange(e)}
						>
							{types.map((type, index) => (
								<option key={index}>{type}</option>
							))}
						</select>
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
