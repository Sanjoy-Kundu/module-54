import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import './Home.css'
import Tshirt from '../Tshirt/Tshirt'
import Cart from '../Cart/Cart';

const Home = () => {
	const [tshirts, setTshirt] = useTshirt();
	const [cart, setCart] = useState([])



	const handelAddToCart = (selectedShirt) => {
		//console.log(selectedShirt);

		const exits = cart.find(tShirt => tShirt._id === selectedShirt._id);
		if (!exits) {
			const newCart = [...cart, selectedShirt];
			setCart(newCart)
		}

	}



	const handelRemoveFromCart = (selectedItem) => {
		const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id)
		setCart(rest)


	}
	return (
		<div className='home-container'>
			<div className="thirst-container">

				{
					tshirts.map(tshirt => <Tshirt tshirt={tshirt} key={tshirt._id} handelAddToCart={handelAddToCart}></Tshirt>)
				}
			</div>
			<div className="cart-container">
				<Cart cart={cart} handelRemoveFromCart={handelRemoveFromCart}></Cart>
			</div>

		</div>
	);
};

export default Home;