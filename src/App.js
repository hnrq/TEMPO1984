import React from 'react';
import './App.scss';
import NavBar from './components/NavigationBar';
import { HashRouter } from 'react-router-dom';
import Container from './components/Container';

const App = () => (
	<HashRouter basename="/">
		<div className="App">
			<NavBar />
			<Container />
		</div>
	</HashRouter>
);

export default App;
