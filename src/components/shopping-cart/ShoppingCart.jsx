import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

const ShoppingCart = ({shoppingCart, formatter, sumOfCart, deleteFromCart}) => {
	const history = useHistory();
	const routeChange = () => {
		let path = 'checkout/thank-you-page';
		history.push(path);
	}
	return (
		<section className="item-list">
			<div className="title">
				<h2>Your Shopping Cart</h2>
			</div>
			{shoppingCart.map(item => (
				<div key={item.id} className="item">
					<div className="item-left">
						<div className="item-name">{item.name}&times;({item.quantity})</div>
						<img src={item.image} alt={item.name} />
					</div>
					<div className="item-right">
						{formatter.format(item.price * item.quantity)}
						<div>
							<button onClick={() => deleteFromCart(item.id)}><FontAwesomeIcon icon='trash' size='lg' /></button>
						</div>
					</div>
				</div>
			))}
			<div className="submit">
				<div className="total-price">
					<h4>Total:</h4>
					<div>{formatter.format(sumOfCart)}</div>
				</div>
				<div className="submit-button">
					<button onClick={routeChange}>Check Out</button>
				</div>
			</div>
		</section>
	)
}

export default ShoppingCart;
