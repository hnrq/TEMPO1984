import React from 'react';
import { ProgramIcon } from '../assets/SVGs';
import { LinkContainer } from 'react-router-bootstrap';

const Program = () => (
	<LinkContainer to={this.props.to}>
		<div className="program">
			<ProgramIcon />
			<figcaption>{this.props.programName}</figcaption>
		</div>
	</LinkContainer>
);

export default Program;
