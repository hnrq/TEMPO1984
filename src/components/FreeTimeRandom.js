import React,{Component} from 'react';
import {PERSONAL_DEVELOPMENT,FUN,HABILITIES,tips} from '../utils/FreeTimeTips';
import Typing from 'react-typing-animation';

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
                <Typing speed={20}>
                    <h1>{tip.title}</h1>
                    <h3>{tip.desc}</h3>
                </Typing>
            );
    }

    render(){
        return(
            <div ref={(div) => {this.lifespanTimer = div}} className="text-container" tabIndex="0">
                <Typing className = {`presentation ${!this.state.tip ? `` : `invisible`}`} speed={20}>
                    <h1>Quero aproveitar melhor a vida</h1>
                    <h3>Ta a toa e sem ideia do que fazer? Precisa de um conselho? Escolha uma alternativa para receber uma sugestao:</h3>
                    <span className="category" onClick={() => {this.getTip(PERSONAL_DEVELOPMENT)}}>Auto-aperfeiçoamento</span>
                    <span className="category" onClick={() => {this.getTip(FUN)}}>Diversão</span>
                    <span className="category" onClick={() => {this.getTip(HABILITIES)}}>Novas habilidades</span>
                </Typing>
                {this.renderTip()}
            </div>
        )
    }
}