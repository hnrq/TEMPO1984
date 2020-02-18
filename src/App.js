import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavigationBar';
import { HashRouter } from 'react-router-dom';
import Container from './components/Container';

class App extends Component {
	render() {
		return (
			<HashRouter basename="/">
				<div className="App">
					<NavBar />
					<Container />
				</div>
			</HashRouter>
		);
	}
}

export default App;
