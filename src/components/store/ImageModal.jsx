import React from 'react';

const ImageModal = ({showModal, productImage, onClose}) => {
	if (!showModal) return null;
	return (
		<div className="image-modal">
			<div className="modal-content">
				<div className="close-button">
					<button onClick={onClose}>&times;</button>
				</div>
				<img src={productImage} alt="enlarged" />
			</div>
		</div>
	)
}

export default ImageModal;
