import React,{Component} from 'react';
import Typed from 'react-typed';
import {getLifespan} from '../utils/Time';

export default class TimeLeft extends Component{
    constructor(){
        super();
        this.state = {
            birthdayValidationMessage : ['JooJ'],
            isBirthdayInputVisible: false,
            programStarted: false,
            isResultReady: false,
            tapped: false,
            isMale: true,
            birthday:'',
            lifespan:''
        }
        this.startProgram = this.startProgram.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSelectKeys = this.handleSelectKeys.bind(this);
        this.showBirthdayInput = this.showBirthdayInput.bind(this);
        this.birthdayInputHandler = this.birthdayInputHandler.bind(this);
        this.showResults = this.showResults.bind(this);
        this.renderResults = this.renderResults.bind(this);
    }

    handleKeyPress(e){
        if(e.key === 'Enter') this.startProgram();
    }

    handleSelectKeys(e) {
        var {tapped} = this.state;
        const eventType = e.type;
        const eventKey = e.key;
        if(eventType === 'touchend'){
            if(!tapped){
                this.setState({tapped:setTimeout(() => {
                this.setState({tapped: null});
                this.birthdayType.start();
            
            },200)});
            } else { 
                clearTimeout(tapped); 
                this.setState({tapped: null});
                this.genderInput.reset(true);
                this.setState({
                    isMale: !this.state.isMale
                });
            }
        } else{
            if ( eventKey === 'ArrowUp' || eventKey === 'ArrowDown'){
                this.genderInput.reset(true);
                this.setState({
                    isMale: !this.state.isMale
                });
            }
            if (e.key === 'Enter') {
                this.birthdayType.start();
            };
        }
        e.preventDefault()
    }
    
    showResults() {
        const splittedDate = this.state.birthday.split('-');
        const birthday = new Date(splittedDate[0], --splittedDate[1], splittedDate[2]);
        const isMale = this.state.isMale;
        this.setState({lifespan: getLifespan(birthday, isMale)});
    }

    renderResults(){
        const lifespan = this.state.lifespan;
        if(lifespan){
            const seconds = Math.round(lifespan / 1000);
            const minutes = Math.round(lifespan / 60000)
            const hours = Math.round(lifespan / 3600000)
            const days = Math.round(lifespan / 86400000)
            return (
            <p>
                <Typed typeSpeed={30}
                typedRef={(resultText) => { this.resultText = resultText }}
                showCursor={true}
                strings={[`De acordo com meus calculos, voce ainda tem <b>${seconds} segundos</b>, 
                            ou <b>${minutes} minutos</b>, 
                            ou <b>${hours} horas</b>, 
                            ou <b>${days} dias de vida</b>.\n
                            O que ta esperando? O <u>tempo voa</u>!`]}
                />
            </p>);
        }

    }
    startProgram(){
        this.setState({
            programStarted: true
        })
        this.genderSelect.start();
    }

    componentDidMount(){
        this.lifespanTimer.focus();
    }

    showBirthdayInput(){
        this.setState({
            isBirthdayInputVisible: true
        });
    }

    birthdayInputHandler(e) {
        const value = e.target.value;
        const date = new Date(value);
        this.setState({
            birthday: value
        });
        if (value.length === 10 && value.substring(0, 4) > 999) {
            const now = new Date();
            this.birthdayValidationField.reset(true);
            if (now - date < 0) {
                this.birthdayValidationField.start();
                this.setState({
                    birthdayValidationMessage: ['Viagem no futuro ainda nao foi implementada. Data invalida.']
                });
            } else if (now - date >= 3130809164684) {
                this.birthdayValidationField.start();
                this.setState({
                    birthdayValidationMessage: ['Meu Deus, temos um vampiro aqui! Data antiga demais.']
                });
            } else {
                this.setState({
                    birthdayValidationMessage: ['']
                });
                this.birthdayInput.readOnly = true;
                this.birthdayValidationField.className = "invisible";
                this.finalText.start();
            }
        }
    }

    render(){
        return(
            <div ref={(div) => {this.lifespanTimer = div}} className="text-container"  tabIndex="0" onKeyPress={this.handleKeyPress} onTouchEnd={this.startProgram}>
                <div className={`header ${this.state.programStarted ? 'invisible' : ''}`} >
                    <h1><Typed typeSpeed={30} strings={['Temporizador de Vida']} showCursor={false} onComplete={() => {this.subtitle.start()}}/></h1>
                    <h3><Typed typeSpeed={30} stopped={true}  typedRef={(subtitle) => { this.subtitle = subtitle; }} showCursor={false} onComplete={() => {}} strings={['Descubra quanto tempo de vida voce tem. <b>&lt;TOQUE&gt;</b> ou pressione <b>&lt;ENTER&gt;</b> para iniciar.']}/></h3>
                </div>
                
                <div className={`lifespan-calculator ${this.state.programStarted && !this.state.lifespan ? '' : 'invisible'}`}>
                    <p><Typed typeSpeed={30} stopped={true}  typedRef={(genderSelect) => { this.genderSelect = genderSelect }} showCursor={false} onComplete={() => {this.genderInput.start()}} strings={['Escolha seu sexo (<b>&lt;TOQUE_DUPLO&gt;</b> no texto roxo ou setas <b>&lt;CIMA&gt;</b> e <b>&lt;BAIXO&gt;</b> para alternar as opçoes, <b>&lt;ENTER&gt;</b> ou  <b>&lt;TOQUE&gt;</b> no texto roxo para confirmar):']}/> 
                        <span id="gender-input" 
                                onKeyDown={this.handleSelectKeys} tabIndex="0"
                                onTouchEnd={this.handleSelectKeys} ref={(span) => {this.genderSpan = span}}>
                        <Typed  typeSpeed={30} tabIndex="0"
                                onStart={()=> {this.genderSpan.focus()}}
                                showCursor={false}
                                onComplete={()=>{this.genderInput.showCursor = true}}
                                strings={this.state.isMale ? ['Masculino']:['Feminino']} stopped={true}
                                typedRef={(genderInput) => { this.genderInput = genderInput}}/>
                        </span>
                    </p>
                    <p style={{margin:0}}><Typed typeSpeed={30} stopped={true} onComplete={() => {this.showBirthdayInput(); this.birthdayInput.focus()}} typedRef={(birthdayType) => { this.birthdayType = birthdayType }} showCursor={false} strings={['Otimo! Agora, digite seu aniversario: ']}/> 
                        <input  ref={(input) => { this.birthdayInput = input }} 
                            type="date"     
                            onChange={this.birthdayInputHandler} 
                            value={this.state.birthday} 
                            className={`birthday-input ${this.state.isBirthdayInputVisible ? '' : 'invisible'}`} 
                            required="required"/>
                    </p>
                    <Typed className="validation-message" typeSpeed={30} tabIndex="0"
                        style={{ color: 'red' }}
                        typedRef={(birthdayValidationField) => { this.birthdayValidationField = birthdayValidationField }}
                        showCursor={false}
                        strings={this.state.birthdayValidationMessage}
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
                <div className={`lifespan-calculator`}>
                    {this.renderResults()}
                </div>
            </div>
            
        )
    }
}