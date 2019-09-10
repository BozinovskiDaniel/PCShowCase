import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Store from './components/Store';
import History from './components/History';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
		<div className="App">
			<Nav />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/store" component={Store} />
				<Route path="/history" component={History} />
				<Route path="/contact" component={Contact} />
			</Switch>
			<Footer />
		
		</div>
    </Router>
  );
}

export default App;
