import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

const Nav = ({shoppingCart}) => (
	<nav>
		<div className=" navbar">
			<div className='nav-left'>
				<ul>
					<li>
						<Link to="/shopping-cart">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/store">Store</Link>
					</li>
				</ul>
			</div>
			<div className="nav-center">
				<h1>STAX World</h1>
			</div>
			<div className='nav-right'>
				<Link to="/checkout"><FontAwesomeIcon icon='shopping-cart' size='lg' /></Link>({shoppingCart.length})
			</div>
		</div>
	</nav>
)

export default Nav;
