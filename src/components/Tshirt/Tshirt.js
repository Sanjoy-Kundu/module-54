import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {
	//console.log(props.tshirt)
	const { name, price, picture } = props.tshirt;
	const { handelAddToCart, tshirt } = props
	return (
		<div className='tshirt-container'>
			<img src={picture} alt="" />
			<h3>{name}</h3>
			<h2>Price: ${price}</h2>
			<button onClick={() => handelAddToCart(tshirt)}>Add to Cart</button>
		</div>
	);
};

export default Tshirt;