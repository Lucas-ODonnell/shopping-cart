import React from 'react';
import CompanyHistory from './CompanyHistory.jsx';
import TimeLine from './TimeLine.jsx';
import Technology from './Technology.jsx';
import staxBanner from '../images/stax-banner.jpg';
import staxGif from '../images/stax-working.gif';

const About = () => (
	<section>
		<div className="about">
			<div className="about-container">
				<div className="stax-banner">
					<img src={staxBanner} alt="stax company logo banner" />
				</div>
				<CompanyHistory />
				<TimeLine />
				<div className="stax-animation" >
					<img src={staxGif} alt="electrostatic technology gif" />
				</div>
				<Technology />
			</div>
		</div>
	</section>
)

export default About;
