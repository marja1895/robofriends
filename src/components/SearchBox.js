import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa3'>
			<input
				className='pa2 ba b--green br4 b--dotted bg-lightest-blue'
				type='search'
				placeholder='Search your robot'
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
