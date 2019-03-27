import React,{Component} from 'react';
import Program from './ProgramShortcut';

export default class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="program-container">
                    <Program programName="Temporizador de vida" to="time-left"/>
                    <Program programName="Quero aproveitar mais" to="what-to-do"/>
                    <Program programName="Quero viver mais" to="what-to-do"/>
                </div>
            </div>
        )
    }
}