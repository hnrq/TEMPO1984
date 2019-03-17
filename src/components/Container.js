import React,{Component} from 'react';
import {Route,withRouter} from 'react-router-dom';
import PageHeader from './PageHeader';
import Home from './Home';
import TimeLeft from './TimeLeft';
import FreeTimeRandom from './FreeTimeRandom';
import {ArrowIcon,ResizeIcon} from '../assets/SVGs';

class Container extends Component{
    
    renderBorders(pathname){
      if(pathname === '/') 
        return(
            <div>
                <div className="horizontal-scroll">
                    <div className="icon-container arrow-left"><ArrowIcon/></div>
                    <div className="horizontal-scroll-right">
                        <div className="icon-container arrow-right" style={{marginRight:"-2px"}}><ArrowIcon/></div>
                        <div className="icon-container"><ResizeIcon/></div>
                    </div>
                </div>
                <div className="vertical-scroll">
                    <div className="icon-container arrow-up"><ArrowIcon /></div>
                    <div className="icon-container arrow-down"  style={{marginBottom:"-4px"}}><ArrowIcon/></div>
                </div>
            </div>
        );
    }

    render(){
        return(
            <div className="container">
                <Route component = {PageHeader}/>
                <Route path="/" exact component={Home}/>
                <Route path="/time-left" component={TimeLeft}/>
                <Route path="/what-to-do" component={FreeTimeRandom}/>
                {this.renderBorders(this.props.location.pathname)}
            </div>
        );
    }
}


export default withRouter(props => <Container {...props}/>);