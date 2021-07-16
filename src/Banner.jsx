import React from 'react';

const Banner = ({showBanner, currentProduct}) => {
	if (!showBanner) return null;
	return (
		<div className='banner'>
			{currentProduct.name} has been added to your cart!
		</div>
	)
}

export default Banner;
