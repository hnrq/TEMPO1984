import React,{Component} from 'react'
import {ProgramIcon} from '../assets/SVGs';
import {LinkContainer} from 'react-router-bootstrap';

export default class Program extends Component{
    render(){
        return(
            <LinkContainer  to={this.props.to}>
                <div className="program">
                   <ProgramIcon/>
                    <figcaption>{this.props.programName}</figcaption>
                 </div>
            </LinkContainer>
        );
    }
}