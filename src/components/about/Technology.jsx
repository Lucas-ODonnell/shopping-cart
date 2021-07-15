import React from 'react';

const Technology = () => {
	return (
		<section className='technology'>
			<div className="electrostatic-info">
				<h2>How Electrostatic Headphones Work</h2>
				<p>The electrostatic headphones consist of two electrically conductive grids with a statically
					charged piece of high-polymer film which is less than 2 microns thick
					in the middle. Sound is produced as
					the membrane moves between the two stators. Electrostatic headphones are capacitors
					and require an amp(transformer) to raise the voltage to 580 volts in order to run. Because
					you need a transformer to run electrostatic headphones that often require an additional
					step up or step down transformer, electrostatic headphones are generally not portable.
					Beyond this they have zero sound isolation so your listening experience will be affected
					by external noise and people around you will hear everything you hear.</p>
				<p>If you are restricted to using your headphones in one location, need to put headphones running
				at 580 volts on your head, and potentially need multiple transformers, and perhaps an external
				digital analog converter, why would you choose an electrostatic headphone? The
				film creating the sound is so light, electrostatic headphones have better frequency response
				(both in amplitude and phase). In practice this means much less harmonic distortion, better
				performance in music where a lot of things are happening at the same time (such as a symphony),
				better separation between instruments, and the ability to hear minute details such as a 
				guitarist placing his finger on a string.</p>
			</div>
		</section>
	)
}

export default Technology;
