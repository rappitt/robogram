import React from 'react';
import Card from './Card';


const Cards = ({ robots }) => {
	const cardComponent = robots.map( robot => {
		return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
	})
		return (
			<div className="flex gap-4 flex-wrap p-6 justify-center items-center max-w-7xl mx-auto">
				{cardComponent}
			</div>
		);
}

export default Cards;