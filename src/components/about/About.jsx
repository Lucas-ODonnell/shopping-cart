import React from 'react';
import CompanyHistory from './CompanyHistory.jsx';
import Technology from './Technology.jsx';
import staxBanner from '../images/stax-banner.jpg';
import staxGif from '../images/stax-working.gif';

const About = () => {
	return (
		<div>
			<div className="stax-banner">
				<img src={staxBanner} alt="stax company logo banner" />
			</div>
			<CompanyHistory />
			<div className="stax-animation" >
			<img src={staxGif} alt="electrostatic technology gif" />
		</div>
		<Technology />
		</div>
	)
}

export default About;
