import React, { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import Banner from './Banner.jsx';
import Nav from './components/Nav.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Store from './components/store/Store.jsx';
import ShoppingCart from './components/shopping-cart/ShoppingCart.jsx';
import CheckOut from './components/shopping-cart/CheckOut.jsx';
import Footer from './components/Footer.jsx';
import uniqid from 'uniqid';

const Router = () => {
	const [shoppingCart, setShoppingCart] = useLocalStorage('shoppingCart', []);
	const [sumOfCart, setSumOfCart] = useLocalStorage('sumOfCartString', "0");
	const [currentProduct, setCurrentProduct] = useState({});
	const [showBanner, setShowBanner] = useState(false);

	const addProductToCart = (product) => {
		//deep copy prevents change to the original product object
		const thisProduct = JSON.parse(JSON.stringify(product)); 
		thisProduct.id = uniqid();
		setCurrentProduct(thisProduct);
		setShoppingCart([...shoppingCart, thisProduct])
		flashBanner();
		addPriceOfSelectedItemToCart(thisProduct);
		product.quantity = 1;
	}

	const addPriceOfSelectedItemToCart = (thisProduct) => {
		setSumOfCart(sumOfCart + (thisProduct.price * thisProduct.quantity))
	}

	const deleteFromCart = (id) => {
		setShoppingCart(shoppingCart.filter(item => item.id !== id));
		removePriceFromDeletedItem(id);
	}

	const removePriceFromDeletedItem = (id) => {
		const toDelete = shoppingCart.filter(item => item.id === id);
		setSumOfCart(sumOfCart - (toDelete[0].price * toDelete[0].quantity))
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
		<Routes>
			<Nav {...{shoppingCart}}/>
			<Banner {...{showBanner, currentProduct}}/>
			<Switch>
				<Route exact path='/shopping-cart' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/store'>
					<Store {...{addProductToCart, formatter}}/>
				</Route>
				<Route exact path='/checkout' >
					<ShoppingCart  {...{shoppingCart, formatter, sumOfCart, deleteFromCart}}/>
				</Route>
				<Route path="/checkout/thank-you-page" component={CheckOut} />
			</Switch>
			<Footer />
		</Routes>
	)
}

export default Router;
