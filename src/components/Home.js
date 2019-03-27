import React,{Component} from 'react';
import Program from './ProgramShortcut';

export default class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="program-container">
                    <Program programName="Calculadora de vida" to="time-left"/>
                    <Program programName="Aproveitar mais" to="what-to-do"/>
                    <Program programName="Viver mais" to="what-to-do"/>
                </div>
            </div>
        )
    }
}