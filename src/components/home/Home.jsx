import React from 'react'
import bannerImage from '../images/SRM400_image1450820.jpg';

const Home = () => (
	<section>
		<div className="home-image">
			<img src={bannerImage} alt="l700 with srm400s" />
		</div>
		<div className="home-banner">
			<h2>New Products</h2>
		</div>
		<div className="new-items">
			<p>There are currently no new products scheduled to be released</p>
		</div>
	</section>
)


export default Home;
