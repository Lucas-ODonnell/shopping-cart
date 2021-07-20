import React from 'react';

const ProductListing = ({product, addProductToCart, formatter, setShowModal, setModalImage, setItemQuantity }) => (
	<div className="product" >
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
					<select onChange={(e)=> setItemQuantity(e,product)}>
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
)


export default ProductListing;


