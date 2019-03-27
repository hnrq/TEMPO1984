import React,{Component} from 'react';
import {PERSONAL_DEVELOPMENT,FUN,HABILITIES,tips} from '../utils/FreeTimeTips';
import Typed from 'react-typed';

export default class FreeTimeRandom extends Component{
    constructor(){
        super();
        this.state = {
            tip: false
        }
        this.getTip = this.getTip.bind(this);
        this.renderTip = this.renderTip.bind(this);
    }

    getTip(category){
        const filteredTips = tips.filter((tip) => tip.category === category);
        this.setState({tip: filteredTips[Math.floor(Math.random() * filteredTips.length)]});
    }

    renderTip(){
        const tip = this.state.tip;
        if(tip)
            return(
                <div>
                    <h1><Typed typeSpeed={30} showCursor={false} typedRef={(typed) => {this.tipTitle = typed}} onComplete={() => {this.tipDescription.start()}} strings={[tip.title]}/></h1>
                    <h3><Typed stopped={true} showCursor={false} typeSpeed={30} typedRef={(typed) => {this.tipDescription = typed}} strings={[tip.desc]}/></h3>
                </div>
            );
    }

    render(){
        return(
            <div ref={(div) => {this.lifespanTimer = div}} className={`text-container`} tabIndex="0">
                <div className={this.state.tip ? 'invisible' : ''}>
                    <h1><Typed showCursor={false} typedRef={(title) => {this.title = title}} onComplete={() => {this.description.start()}} typeSpeed={30} strings={['Quero aproveitar melhor a vida']}/></h1>
                    <h3><Typed stopped={true} onComplete={() => {this.personalDevelopment.start()}} showCursor={false} typedRef={(description) => {this.description = description}} typeSpeed={30} strings={['Ta a toa e sem ideia do que fazer? Precisa de um conselho? Escolha uma alternativa para receber uma sugestao:']}/></h3>
                    <div style={{display:'block'}}><span className="category" onClick={() => {this.getTip(PERSONAL_DEVELOPMENT)}}><Typed stopped={true} onComplete={() => {this.fun.start()}} showCursor={false} typedRef={(personalDevelopment) => {this.personalDevelopment = personalDevelopment}} typeSpeed={30} strings={['Auto-aperfeiçoamento']}/></span></div>
                    <div style={{display:'block'}}><span className="category" onClick={() => {this.getTip(FUN)}}><Typed stopped={true} onComplete={() => {this.habilities.start()}} showCursor={false} typedRef={(fun) => {this.fun = fun}} typeSpeed={30} strings={['Diversão']}/></span></div>
                    <div style={{display:'block'}}><span className="category" onClick={() => {this.getTip(HABILITIES)}}><Typed stopped={true} showCursor={false} typedRef={(habilities) => {this.habilities = habilities}} typeSpeed={30} strings={['Novas habilidades']}/></span></div>
                </div>
                {this.renderTip()}
            </div>
        )
    }
}