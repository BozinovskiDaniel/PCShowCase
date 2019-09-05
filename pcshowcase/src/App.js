import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Store from './components/Store';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
		<div className="App">
			<Nav />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/store" component={Store} />
				<Route path="/contact" component={Contact} />
			</Switch>
		
		</div>
    </Router>
  );
}

export default App;
