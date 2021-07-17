import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import Banner from './Banner.jsx';
import Nav from './components/Nav.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Store from './components/store/Store.jsx';
import ShoppingCart from './components/shopping-cart/ShoppingCart.jsx';
import Footer from './components/Footer.jsx';
import uniqid from 'uniqid';

const Router = () => {
	const localStorageCart = localStorage.getItem('shoppingCart') || '[]'; 
	const generatedCart = JSON.parse(localStorageCart);
	const [shoppingCart, setShoppingCart] = useState(generatedCart);
	const [showBanner, setShowBanner] = useState(false);
	const [currentProduct, setCurrentProduct] = useState({});
	const localStorageSum = localStorage.getItem('sumOfCartString');
	const generatedSum = JSON.parse(localStorageSum);
	const [sumOfCart, setSumOfCart] = useState(generatedSum);
	const cartString = JSON.stringify(shoppingCart);
	const sumOfCartString = JSON.stringify(sumOfCart);

	const deleteFromCart = (id) => {
		setShoppingCart(shoppingCart.filter(item => item.id !== id));
		deleteCart(id);
	}

	const deleteCart = (id) => {
		const toDelete = shoppingCart.filter(item => item.id === id);
		setSumOfCart(sumOfCart - toDelete[0].price)
	}

	const addProductToCart = (product) => {
		//deep copy prevents change to the original product object
		const thisProduct = JSON.parse(JSON.stringify(product)); 
		thisProduct.id = uniqid();
		setCurrentProduct(thisProduct);
		setShoppingCart([...shoppingCart, thisProduct])
		flashBanner();
		addCart(thisProduct);
	}

	const addCart = (thisProduct) => {
		setSumOfCart(sumOfCart + thisProduct.price)
	}

	useEffect(() => {
		const filteredCart = shoppingCart.filter(value => Object.keys(value).length !== 0);
		localStorage.setItem('shoppingCart', JSON.stringify(filteredCart));
		localStorage.setItem('sumOfCartString', JSON.stringify(sumOfCart))
	}, [cartString, shoppingCart, sumOfCartString, sumOfCart]);

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
		<Routes>
			<Nav {...{shoppingCart}}/>
			<Banner {...{showBanner, currentProduct}}/>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/store'>
					<Store {...{addProductToCart, formatter}}/>
				</Route>
				<Route exact path='/checkout' >
					<ShoppingCart  {...{shoppingCart, formatter, sumOfCart, deleteFromCart}}/>
				</Route>
			</Switch>
			<Footer />
		</Routes>
	)
}

export default Router;
