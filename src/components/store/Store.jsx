import React, {useState} from 'react';
import ImageModal from './ImageModal.jsx';
import {products} from './products.js';
import ProductListing from './ProductListing.jsx';

const Store = ({addProductToCart, formatter}) => {
	const [showModal, setShowModal] = useState(false);
	const [modalImage, setModalImage] = useState('');

	const setItemQuantity = (e, product) => {
		product.quantity = parseInt(e.target.value);
	}
	return (
		<section>
			<div className="store">
				<div className="store-container">
					<div className="products-grid">
						{products.map((product) => (
							<div key={product.id} >
								<ProductListing {...{product, addProductToCart, formatter, setModalImage, setItemQuantity, setShowModal}} />
							</div>
						))}
						<ImageModal onClose={() => setShowModal(false)} showModal={showModal} productImage={modalImage} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Store;
