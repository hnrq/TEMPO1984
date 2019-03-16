import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import PageHeader from './PageHeader';
import Home from './Home';
import TimeLeft from './TimeLeft';
import FreeTimeRandom from './FreeTimeRandom';

export default class Container extends Component{
    render(){
        return(
            <div className="container">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route component = {PageHeader}/>
                </Switch>
                <Route path="/time-left" component={TimeLeft}/>
                <Route path="/what-to-do" component={FreeTimeRandom}/>
            </div>
        );
    }
}