import STAXL300 from '../images/staxl300.jpg';
import STAXL500 from '../images/staxl500.jpg';
import STAXL700 from '../images/staxl700.jpg';
import SR007A from '../images/sr007a_2000x.jpg';
import SR007MK2 from '../images/SR007d4.jpg';
import SR009 from '../images/sr009final.jpg';
import SR009S from '../images/sr009s.jpg';
import SRMD10 from '../images/srmd10.jpg';
import SRM353x from '../images/srm353x.jpg';
import SRMD50 from '../images/srmd50.jpg';
import SRM500T from '../images/srm500t.jpg';
import SRM727II from '../images/srm727II.jpg';
import SRM007tII from '../images/srm007tII.jpg';
import SRM700T from '../images/srm700t.jpg';
import SRM700S from '../images/srm700s.jpg';

export const products = [
	{
		id: "l300",
		name: "STAX L-300",
		description: "The L300 is a great introduction to the world of electrostatic sound reproduction, with its trademark detail, openness, and fluidity. The L300 has a balanced presentation that leans a bit toward the midrange. ",
		price: 455,
		image: STAXL300,
		quantity: 1
	},
	{
		id: 'l500',
		name:"STAX L-500",
		description: "The STAX SR-L500 is the midrange model in the L-series, and offers the headband design from the flagship SR-009 and upgraded ear pads from the L300 for comfort.",
		price: 830,
		image: STAXL500,
		quantity: 1
	},
	{
		id: 'l700',
		name: "STAX L-700",
		description: "The STAX L700 is an excellent headphone, featuring driver design very similar to the SR-009 for a punchier bass response than most electrostats. The L700 has a nicely balanced overall sound and scales well with amplification",
		price: 1649,
		image: STAXL700,
		quantity: 1
	},
	{
		id: '007a',
		name: "STAX SR-007A",
		description: "The STAX SR-007A headphone is the updated version of the classic SR-007 “Omega II”, with a silver finish normally only found in Japan. The sound is the warmest, lushest sound of any STAX with an emphasis on the mid-to-lower frequencies without a loss of high end detail. It is a more relaxed sound signature compared to the more detail-forward SR-009 models.",
		price: 2205,
		image: SR007A,
		quantity: 1
	},
	{
		id: '007mk2',
		name: "STAX SR-007MK2",
		price: 2205,
		description: "The STAX SR-007MK2 headphone is the updated version of the classic SR-007 “Omega II”, with a black finish and slightly different driver. The sound is the warmest, lushest sound of any STAX with an emphasis on the mid-to-lower frequencies without a loss of high end detail. It is a more relaxed sound signature compared to the more detail-forward SR-009 models.",
		image: SR007MK2,
		quantity: 1
	},
	{
		id: '009',
		name: "STAX SR-009",
		price: 3825,
		description: "Since its launch the SR-009 has stood at the forefront of headphone audio, with detail reproduction and open sound that is rarely matched. The blindingly quick electrostatic diaphragms offer a musical reproduction many find transcendent, especially with well-recorded unamplified music.",
		image: SR009,
		quantity: 1
	},
	{
		id: '009s',
		name: "STAX SR-009S",
		price: 4545,
		description: "With improved bass response and a tamed treble peak relative to the original SR-009, the SR-009S is STAX's latest effort to produce the world’s best headphone. With updated drivers, pads, and other housing pieces, the SR-009S is a step forward while still retaining much of the character of the original.",
		image: SR009S,
		quantity: 1
	},
	{
		id: 'd10',
		name: "STAX SRM-D10 Electrostatic Energizer",
		price: 945,
		description: "The SRM-D10 is the world's first compact electrostatic amp/DAC. Now, you can enjoy the freedom of using all modern Stax electrostatic headphones (PRO bias) anywhere you go. The built-in high-resolution DAC is capable playing up to DSD128 files.",
		image: SRMD10,
		quantity: 1
	},
	{
		id: '353x',
		name: "STAX SRM-353X Electrostatic Energizer",
		price: 975,
		description: "The SRM-353X is the exclusive driver unit (amplifier) produced to drive STAX electrostatic Earspeaker headphones. Carefully hand selected high quality parts of audio grade further improves tonal quality, and achieved wider frequency response from re-examination of circuitry.  Newly added XLR input terminal enables connection of balanced outputs of audio equipment taking full advantage of its superior performance.",
		image: SRM353x,
		quantity: 1
	},
	{
		id: 'd50',
		name: "STAX SRM-D50 Electrostatic Energizer",
		price: 1260,
		description: "The SRM-D50 is a high-performance electrostatic driver and Digital-to-Analog Converter, inspired by the battery-powered SRM-D10. With an elegant all-in-one design, the D50 creates a simple solution for any music lovers to experience the legendary sound of Stax earspeakers.",
		image: SRMD50,
		quantity: 1
	},
	{
		id: '500t',
		name: "STAX SRM-500T Electrostatic Energizer",
		price: 1380,
		description: "Stax introduces a new model SRM-500T to replace its successor of SRM-006tS. The SRM-500T utilizes a pair of 6FQ7/6CG7 vacuum tubes as the output, driven by custom-made low noise dual FET. Stax pride itself in offering a great value electrostatic driver at the best possible performance.",
		image: SRM500T,
		quantity: 1
	},
	{
		id: '727II',
		name: "STAX SRM-727II Electrostatic Energizer",
		price: 1599,
		description: "The SRM-727II features non-feedback (NON-NFB) output stage for the first time ever in STAX drivers. Large current emitter follower Class A amplification circuit. This makes it possible to achieve a much more vivid and dynamic sound quality with frequency response raised to 115kHz. (from 100kHz)",
		image: SRM727II,
		quantity: 1
	},
	{
		id: '007tII',
		name: "STAX SRM-007tII Electrostatic Energizer",
		price: 1730,
		description: "The SRM-007T II uses the widely respected STAX original output stage using high voltage 6FQ7/6CG7 output tubes in parallel. The low impedance of this output stage is most effective for driving STAX Earspeakers.",
		image: SRM007tII,
		quantity: 1
	},
	{
		id: '700s',
		name: "STAX SRM-700S",
		price: 3400,
		description: "The SRM-700S is an electrostatic headphone driver utilizing a fully discrete dual FET. The output of the J-FET and the large current emitter follower circuit are low noise. Accurate music reproduction is realized without missing any fine details.",
		image: SRM700S,
		quantity: 1
	},
	{
		id: '700t',
		name: "STAX SRM-700T Electrostatic Energizer",
		price: 3400,
		description: "The newly designed SRM-700T is a hybrid electrostatic headphone driver. Inspired by the flagship model SRM-T8000, the 700T uses solid-state FET as a driver stage and vacuum tube as the output stage.",
		image: SRM700T,
		quantity: 1
	}
]
