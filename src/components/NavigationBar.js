import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => setTime(new Date()), 1000);
	}, []);

	return (
		<div>
			<Navbar>
				<Nav className="mr-auto">
					<LinkContainer to="/" style={{ marginLeft: '-2px' }}>
						<Nav.Link>¤</Nav.Link>
					</LinkContainer>
					<LinkContainer to="time-left">
						<Nav.Link className={'text-link'}>Lifespan calculator</Nav.Link>
					</LinkContainer>
					<LinkContainer to="what-to-do">
						<Nav.Link className={'text-link'}>Enjoy better</Nav.Link>
					</LinkContainer>
					<LinkContainer to="health-tips">
						<Nav.Link className={'text-link'}>Live more</Nav.Link>
					</LinkContainer>
					<LinkContainer to="exercise-time">
						<Nav.Link className={'text-link'}>Exercises</Nav.Link>
					</LinkContainer>
				</Nav>
				<Nav pullright="true" className="nav-clock">
					<span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
				</Nav>
			</Navbar>
		</div>
	);
};

export default NavigationBar;
