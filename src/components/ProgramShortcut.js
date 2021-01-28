import React from 'react';
import { ProgramIcon } from '../assets/SVGs';
import { LinkContainer } from 'react-router-bootstrap';

const Program = ({ to, programName }) => (
	<LinkContainer to={to}>
		<div className="program">
			<ProgramIcon />
			<figcaption>{programName}</figcaption>
		</div>
	</LinkContainer>
);

export default Program;
