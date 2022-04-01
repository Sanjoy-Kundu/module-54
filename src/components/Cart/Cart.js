import React from 'react';
import './Cart.css'
const Cart = ({ cart, handelRemoveFromCart }) => {


	return (
		<div>
			<h2>Selected item:{cart.length}</h2>
			{
				cart.map(single => <div>
					<p>{single.name}</p>
					<p>{single.price}</p>
					<button onClick={() => handelRemoveFromCart(single)}>
						x
					</button>
				</div>


				)

			}
		</div>
	);
};

export default Cart;