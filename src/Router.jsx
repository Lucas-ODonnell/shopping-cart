import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Store from './components/store/Store.jsx';
import ShoppingCart from './components/shopping-cart/ShoppingCart.jsx';
import CheckOut from './components/shopping-cart/CheckOut.jsx';
import Nav from './components/Nav.jsx';


const Router = ({addProductToCart, formatter, shoppingCart, sumOfCart, deleteFromCart}) => (
	<Routes>
		<Nav {...{shoppingCart}}/>
		<Switch>
			<Route exact path='/shopping-cart' >
				<Home />
			</Route>
			<Route exact path='/about'> 
				<About />
			</Route>
			<Route exact path='/store'>
				<Store {...{addProductToCart, formatter}}/>
			</Route>
			<Route exact path='/checkout' >
				<ShoppingCart  {...{shoppingCart, formatter, sumOfCart, deleteFromCart}}/>
			</Route>
			<Route path="/checkout/thank-you-page" >
				<CheckOut />
			</Route>
		</Switch>
	</Routes>
)


export default Router;
