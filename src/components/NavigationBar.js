import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class Navigation extends Component{
    constructor(){
        super();
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render(){
        return(
          <div>
            <Navbar>
               <Nav className="mr-auto">
                    <LinkContainer to="/" style={{marginLeft:'-2px'}}><Nav.Link>¤</Nav.Link></LinkContainer>
                    <LinkContainer to="time-left"><Nav.Link className={'text-link'}>Calculadora de vida</Nav.Link></LinkContainer>
                    <LinkContainer to="what-to-do"><Nav.Link className={'text-link'}>Aproveitar mais</Nav.Link></LinkContainer>
                    <LinkContainer to="what-to-do"><Nav.Link className={'text-link'}>Viver mais</Nav.Link></LinkContainer>
                    <LinkContainer to="exercise-time"><Nav.Link className={'text-link'}>Exercicios no tempo livre</Nav.Link></LinkContainer>
               </Nav>
               < Nav pullright="true" className="nav-clock">
                    <span>{this.state.time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                </Nav>
            </Navbar>
          </div>
        )
    }
}