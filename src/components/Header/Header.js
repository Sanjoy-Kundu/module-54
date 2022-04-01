import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
	return (
		<div>
			<h1>Wellcome to Dress Park ShowRoom</h1>
			<nav>
				<Link to='/home' className='menu'>Home</Link>
				<Link to='/orderreview' className='menu'>OrderReview</Link>
				<Link to='/grandpa' className='menu'>GrandPa</Link>
			</nav>
		</div>
	);
};

export default Header;