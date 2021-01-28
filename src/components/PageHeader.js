import React from 'react';
import { Navbar, Col, Row } from 'react-bootstrap';
import Logo from '../assets/loading.gif';
import { HeaderLeft, HeaderRight } from '../assets/SVGs';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
	const { pathname } = useLocation();
	return (
		<div style={{ margin: -2 }}>
			<Navbar>
				<HeaderLeft />
				<Navbar.Brand
					href="/"
					style={{ margin: '1px 1vw 1px 1vw', width: '3em', padding: 0, fontWeight: 'bold' }}
				>
					<img src={Logo} alt="Hourglass" style={{ maxWidth: '100%', height: 'auto' }} />
				</Navbar.Brand>
				<HeaderRight />
			</Navbar>
			{pathname === '/' && (
				<div>
					<Row
						className="nav-row"
						style={{ width: '100%', margin: '-2px 0px 0px 0px', border: '2px solid black' }}
					>
						<Col>
							<span>3 items</span>
						</Col>
						<Col className="text-center">
							<span>211K in disk</span>
						</Col>
						<Col style={{ textAlign: 'right' }}>
							<span>177K available</span>
						</Col>
					</Row>
					<hr style={{ zIndex: 20 }} />
				</div>
			)}
		</div>
	);
};
export default Navigation;
