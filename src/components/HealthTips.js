import React,{Component} from 'react';
import {EXERCISE,FOOD,tips} from '../utils/HealthTips';
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
                    <h1><Typed showCursor={false} typedRef={(title) => {this.title = title}} onComplete={() => {this.description.start()}} typeSpeed={30} strings={['Quero melhorar minha qualidade de vida']}/></h1>
                    <h3><Typed stopped={true} onComplete={() => {this.exercises.start()}} showCursor={false} typedRef={(description) => {this.description = description}} typeSpeed={30} strings={['Viver bem vai alem de viver muitos anos: Trata-se de ter uma boa qualidade de vida, para um envelhecimento saudavel. Escolha uma categoria e receba algumas dicas para melhorar sua qualidade de vida:']}/></h3>
                    <div style={{display:'block'}}><span className="category" onClick={() => {this.getTip(EXERCISE)}}><Typed stopped={true} onComplete={() => {this.food.start()}} showCursor={false} typedRef={(exercises) => {this.exercises = exercises}} typeSpeed={30} strings={['Exercícios']}/></span></div>
                    <div style={{display:'block'}}><span className="category" onClick={() => {this.getTip(FOOD)}}><Typed stopped={true} showCursor={false} typedRef={(food) => {this.food = food}} typeSpeed={30} strings={['Alimentação']}/></span></div>
                </div>
                {this.renderTip()}
            </div>
        )
    }
}