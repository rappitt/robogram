import React from 'react';

const SearchBox = ({ onSearchChange }) => {
		return (
			<div>
				<form className="flex justify-center mt-10 mb-5" action="POST">
					<input 
						className="p-4" 
						type="search" 
						placeholder="Search for Robots..."
						onChange={onSearchChange}
						 />
						}
				</form>
			</div>
		);
}

export default SearchBox;