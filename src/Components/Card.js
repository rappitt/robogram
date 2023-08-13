import React from 'react';

const Card = ({id, name, email}) => {

	return (
		<div className="flex gap-4 grow justify-between items-center bg-white max-w-xs py-3 px-6 rounded-md shadow-sm hover:scale-105 transition duration-300 hover-trigger">
			<div className="content">
				<h2 className="font-bold text-2xl mb-1">{name}</h2>
				<a href="mailto:{email}" className="mb-2 text-xs">{email}</a>
			</div>
			<div className="image min-w-fit object-contain mb-4 rounded-full bg-indigo-200 overflow-hidden">
				<img className="mx-auto hover:scale-105 transition duration-300 delay-100 hover-target" src={`https://robohash.org/${id}?size=100x100`} alt="robot" />
			</div>
		</div>
	);
}

export default Card;
