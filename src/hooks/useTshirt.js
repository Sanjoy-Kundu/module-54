import React, { useState } from 'react';

const useTshirt = () => {
	const [tshirts, setTShirts] = useState([])
	useState(() => {
		fetch('tshirts.json')
			.then(res => res.json())
			.then(data => setTShirts(data))
	})
	return [tshirts, setTShirts]
};

export default useTshirt;

//ai  data amra home.js e use korbo