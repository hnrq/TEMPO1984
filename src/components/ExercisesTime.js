import React,{Component} from 'react';
import {exercises} from '../utils/Exercises';
import {toMinutes} from '../utils/Time';
import Typed from 'react-typed';
import TimeField from 'react-simple-timefield';

export default class ExercisesTime extends Component{
    constructor(){
        super();
        this.state = {
            tip: false,
            isFreeTimeInputVisible: false,
            freeTime:'00:00',
            freeTimeValidationMessage: [],
        }
    }

    showFreeTimeInput = () => this.setState({isFreeTimeInputVisible: true});

    freeTimeInputHandler = (value) => this.setState({freeTime:value});

    
    showResults = () => this.setState({resultReady: true,exercises});

    handleKeyPress = (e) => {
        var {tapped} = this.state;
        const eventType = e.type;
        const eventKey = e.key;
        if(eventType === 'touchend'){
            e.preventDefault();
            if(!tapped){
                this.setState({tapped:setTimeout(() => {
                this.setState({tapped: null});
            },200)});
            } else { 
                clearTimeout(tapped); 
                this.setState({tapped: null});
                this.validateFreeTime(e.target.value);
            }
        } else if (eventKey === 'Enter') {
            e.preventDefault();
            this.validateFreeTime(e.target.value);
        };
    }

    validateFreeTime = (value) => {
        if(toMinutes(value) < 10){
                this.freeTimeValidationField.start();
                this.setState({
                    freeTimeValidationMessage: ['Pra exercitar vai precisar de pelo menos uns 10 minutinhos!']
                });
            } else{
                this.freeTimeInput.readOnly = true;
                this.freeTimeValidationField.className = "invisible";
                this.finalText.start();
            }
    }

    render(){
        return(
            <div ref={(div) => {this.lifespanTimer = div}} className={`text-container`} tabIndex="0">
                <div className={this.state.resultReady ? 'invisible' : ''}>
                    <h1><Typed showCursor={false} typedRef={(title) => {this.title = title}} onComplete={() => {this.description.start()}} typeSpeed={30} strings={['Quero me exercitar no tempo livre']}/></h1>
                    <h3><Typed stopped={true} onComplete={() => {this.inputFreeTimeType.start()}} showCursor={false} typedRef={(description) => {this.description = description}} typeSpeed={30} strings={['Exercicios sao muito importantes para manter uma boa qualidade de vida: ajudam a evitar enfermidades, perder peso, entre outros beneficios.']}/></h3>
< h3 > <Typed
    stopped={true}
    onComplete={() => {
    this.showFreeTimeInput();
    this
        .freeTimeInput
        .focus()
}}
    showCursor={false}
    typedRef={(inputFreeTimeType) => {
    this.inputFreeTimeType = inputFreeTimeType
}}
    typeSpeed={30}
    strings={['Digite quanto tempo livre tem por dia (<b>&lt;ENTER&gt;</b> ou <b>&lt;TOQUE_DUPLO&gt;</b> no texto roxo para confirmar): ']}/>
                        <TimeField onKeyDown={this.handleKeyPress} tabIndex="0"
                                onTouchEnd={this.handleKeyPress} style={{display:'inline',width:'100px'}} input={<input ref={(input) => { this.freeTimeInput = input }}/>}
                            onChange={this.freeTimeInputHandler} 
                            value={this.state.freeTime} 
                            className={`birthday-input ${this.state.isFreeTimeInputVisible ? '' : 'invisible'}`} 
                            required="required"/>
                    </h3>
                    <Typed className="validation-message" typeSpeed={30} tabIndex="0"
                        style={{ color: 'red' }}
                        typedRef={(freeTimeValidationField) => { this.freeTimeValidationField = freeTimeValidationField }}
                        showCursor={false}
                        strings={this.state.freeTimeValidationMessage}
                        stopped={true} />
                    <p>
                        <Typed typeSpeed={30} startDelay={50}
                        typedRef={(finalText) => { this.finalText = finalText }}
                        showCursor={false}
                        onComplete={() => {this.dots.start()}}
                        strings={['Calculando os resultados']}
                        stopped={true} />
                        <Typed typeSpeed={500} 
                        typedRef={(dots) => { this.dots = dots }}
                        showCursor={false}
                        onComplete={() => {this.ready.start()}}
                        strings={['.....']}
                        stopped={true} />
                        <Typed typeSpeed={30}
                        typedRef={(ready) => { this.ready = ready }}
                        showCursor={false}
                        strings={['PRONTO!']}
                        stopped={true} onComplete={() => {this.showResults()}}/>
                    </p>
                </div>
            </div>
        )
    }
}
