import React from 'react';
import SearchBox from './SearchBox'

const Header = ( { onSearchChange } ) => {
	return(
		<header>
			<h1 className="text-8xl text-white text-center my-4" >Robogram</h1>
			<SearchBox onSearchChange={onSearchChange} />
			<hr />
		</header>
		);
}

export default Header;