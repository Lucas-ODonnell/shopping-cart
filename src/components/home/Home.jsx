import React from 'react'
import quoteOne from './5gn0xl.jpg';
import quoteTwo from './5gn1ic.jpg';

const Home = () => {
	return (
		<section>
			<div className="home-banner">
				<h2>What Are People Saying About STAX Headphones?</h2>
			</div>
			<div className="user-reviews">
				<img src={quoteOne} alt='mahler stax' />
				<img src={quoteTwo}  alt='dennis ritchie stax'/>
			</div>
		</section>
	)
}

export default Home;
