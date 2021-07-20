import React, { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import Banner from './Banner.jsx';
import Router from './Router.jsx';
import Footer from './components/Footer.jsx';
import uniqid from 'uniqid';

const App = () => {
	const [shoppingCart, setShoppingCart] = useLocalStorage('shoppingCart', []);
	const [sumOfCart, setSumOfCart] = useLocalStorage('sumOfCart', 0);
	const [currentProduct, setCurrentProduct] = useState({});
	const [showBanner, setShowBanner] = useState(false);

	const addProductToCart = (product) => {
		//deep copy prevents change to the original product object
		const thisProduct = {...product, id: uniqid()}; 
		thisProduct.id = uniqid();
		setCurrentProduct(thisProduct);
		setShoppingCart([...shoppingCart, thisProduct])
		flashBanner();
		addPriceOfSelectedItemToCart(thisProduct);
		product.quantity = 1;
	}

	const addPriceOfSelectedItemToCart = (thisProduct) => {
		setSumOfCart(current => current + (thisProduct.price * thisProduct.quantity));
	}

	const deleteFromCart = (id) => {
		setShoppingCart(shoppingCart.filter(item => item.id !== id));
		removePriceFromDeletedItem(id);
	}

	const removePriceFromDeletedItem = (id) => {
		const toDelete = shoppingCart.filter(item => item.id === id);
		setSumOfCart(current => current - (toDelete[0].price * toDelete[0].quantity));
	}

	const flashBanner = () => {
		setShowBanner(true);
		setTimeout(()=> {
			setShowBanner(false);
		}, 2000);
	}

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return (
		<>
			<Banner {...{showBanner, currentProduct}}/>
			<Router {...{addProductToCart, formatter, shoppingCart, sumOfCart, deleteFromCart}} />
			<Footer />
		</>
	)
}

export default App;
