import './App.css';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Store from './components/Store.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';

const Router = () => {
	return (
		<Routes>
			<Nav />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/store' component={Store} />
				<Route exact path='/checkout' component={ShoppingCart} />
			</Switch>
		</Routes>
	)
}

export default Router;
