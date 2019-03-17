import React,{Component} from 'react';
import Program from './ProgramShortcut';

export default class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="program-container">
                    <Program programName="Time Left" to="time-left"/>
                    <Program programName="What to do" to="what-to-do"/>
                </div>
            </div>
        )
    }
}