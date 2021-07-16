import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import Banner from './Banner.jsx';
import Nav from './components/Nav.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Store from './components/store/Store.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import Footer from './components/Footer.jsx';

const Router = () => {
	const localStorageCart = localStorage.getItem('shoppingCart') || '[{}]'; 
	const generatedCart = JSON.parse(localStorageCart);
	const [shoppingCart, setShoppingCart] = useState(generatedCart);
	const [showBanner, setShowBanner] = useState(false);
	const [currentProduct, setCurrentProduct] = useState({});

	const addProductToCart = (product) => {
		setCurrentProduct(product);
		setShoppingCart([...shoppingCart, product])
		flashBanner();
	}

	const flashBanner = () => {
		setShowBanner(true);
		setTimeout(()=> {
			setShowBanner(false);
		}, 2000);
	}

	useEffect(() => {
		const filteredCart = shoppingCart.filter(value => Object.keys(value).length !== 0);
		localStorage.setItem('shoppingCart', JSON.stringify(filteredCart));
	}, [JSON.stringify(shoppingCart)]);

	return (
		<Routes>
			<Nav {...{shoppingCart}}/>
			<Banner {...{showBanner, currentProduct}}/>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/store'>
					<Store {...{addProductToCart}}/>
				</Route>
				<Route exact path='/checkout' >
					<ShoppingCart  {...{shoppingCart}}/>
				</Route>
			</Switch>
			<Footer />
		</Routes>
	)
}

export default Router;
