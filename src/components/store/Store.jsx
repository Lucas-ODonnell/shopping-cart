import React, {useState} from 'react';
import { products } from './products.js';
import ImageModal from './ImageModal.jsx';

const Store = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalImage, setModalImage] = useState('');
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
								{product.price}
							</div>
							<div>
								<button>Add To Cart</button>
							</div>
						</div>
					</div>
				))}
				<ImageModal onClose={() => setShowModal(false)} showModal={showModal} productImage={modalImage} />
			</div>
		</section>
			)
}

export default Store;
