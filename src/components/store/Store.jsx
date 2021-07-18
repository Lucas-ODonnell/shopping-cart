import React, {useState} from 'react';
import ImageModal from './ImageModal.jsx';
import {products} from './products.js';

const Store = ({addProductToCart, formatter}) => {
	const [showModal, setShowModal] = useState(false);
	const [modalImage, setModalImage] = useState('');
	
	const setItemQuantity = (e, product) => {
		product.quantity = parseInt(e.target.value);
	}
	return (
		<section>
			<div className="products-grid">
				{products.map((product) => (
					<div className="product"  key={product.id}>
						<img src={product.image} alt="stax product" 
							onClick={() => {setShowModal(true); setModalImage(product.image) }}/>
						<h3>{product.name}</h3>
						<p>{product.description}</p>
						<div className="price-row">
							<div>
								{formatter.format(product.price)}
							</div>
							<div className="item-quantity">
								<label>
									Quantity:
									<select onChange={(e)=> setItemQuantity(e, product)}>
										<option default value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</label>
							</div>
						</div>
						<div className="addcart-button">
							<button onClick={() => addProductToCart(product)}>Add To Cart</button>
						</div>
					</div>
				))}
				<ImageModal onClose={() => setShowModal(false)} showModal={showModal} productImage={modalImage} />
			</div>
		</section>
	)
}

export default Store;
