import React from 'react';

const Scroll = (props) => {
	return(
		<div className="scrollbar overflow-y-scroll">
			{props.children}
		</div>
	)
}

export default Scroll;