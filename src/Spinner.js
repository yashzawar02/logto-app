import React from 'react';

const Spinner = ({ title }) => {
	return (
		<div className="spinner-container">
			<h2>{title}</h2>
			<div className="spinner"></div>
		</div>
	);
};

export default Spinner;
