import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

const ShoppingCart = ({shoppingCart, formatter, sumOfCart, deleteFromCart}) => {
	return (
		<section className="item-list">
			<div className="title">
				<h2>Your Shopping Cart</h2>
			</div>
			{shoppingCart.map(item => (
				<div key={item.id} className="item">
					<div className="item-left">
						<div className="item-name">{item.name}</div>
						<img src={item.image} alt={item.name} />
					</div>
					<div className="item-right">
						{formatter.format(item.price)}
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
					<button>Buy</button>
				</div>
			</div>
		</section>
	)
}

export default ShoppingCart;
