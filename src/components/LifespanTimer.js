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
            const finalString = `According to my math, you still have <b>${seconds} seconds</b>, 
                            or <b>${minutes} minutes</b>, 
                            or <b>${hours} hours</b>, 
                            or <b>${days} days</b> to live.\n
                            What are you waiting for? <u>Time flies</u>!`;
            return (
            <p>
                <Typed typeSpeed={30}
                typedRef={(resultText) => { this.resultText = resultText }}
                showCursor={true}
                strings={[finalString]}
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
                    birthdayValidationMessage: ['Time traveling not implemented yet. Invalid date.']
                });
            } else if (now - date >= 3130809164684) {
                this.birthdayValidationField.start();
                this.setState({
                    birthdayValidationMessage: ['My God, there\'s a vampire among us! Invalid date.']
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

    componentWillUnmount(){
        this.genderInput = null;
        this.genderSelect = null;
    }

    startGenderInput = () => {
        if(this.genderInput)
            this.genderInput.start();
    }

    render(){
        return(
            <div ref={(div) => {this.lifespanTimer = div}} className="text-container"  tabIndex="0" onKeyPress={this.handleKeyPress} onTouchEnd={this.startProgram}>
                <div className={`header ${this.state.programStarted ? 'invisible' : ''}`} >
                    <h1><Typed typeSpeed={30} strings={['Lifespan calculator']} showCursor={false} onComplete={() => {this.subtitle.start()}}/></h1>
                    <h3><Typed typeSpeed={30} stopped={true}  typedRef={(subtitle) => { this.subtitle = subtitle; }} showCursor={false} onComplete={() => {}} strings={['Discover how much time you have left. <b>&lt;TAP&gt;</b> or press <b>&lt;ENTER&gt;</b> to start.']}/></h3>
                </div>
                
                <div className={`lifespan-calculator ${this.state.programStarted && !this.state.lifespan ? '' : 'invisible'}`}>
                    <p><Typed typeSpeed={30} stopped={true}  typedRef={(genderSelect) => { this.genderSelect = genderSelect }} showCursor={false} onComplete={() => {this.startGenderInput()}} strings={['Choose your birth gender (<b>&lt;DOUBLE_TAP&gt;</b> on purple text or use arrow <b>&lt;UP&gt;</b> and <b>&lt;DOWN&gt;</b> to change. <b>&lt;ENTER&gt;</b> or  <b>&lt;TAP&gt;</b> on the purple text to submit.):']}/> 
                        <span id="gender-input" 
                                onKeyDown={this.handleSelectKeys} tabIndex="0"
                                onTouchEnd={this.handleSelectKeys} ref={(span) => {this.genderSpan = span}}>
                        <Typed  typeSpeed={30} tabIndex="0"
                                onStart={()=> {this.genderSpan.focus()}}
                                showCursor={false}
                                onComplete={()=>{this.genderInput.showCursor = true}}
                                strings={this.state.isMale ? ['Male']:['Female']} stopped={true}
                                typedRef={(genderInput) => { this.genderInput = genderInput}}/>
                        </span>
                    </p>
                    <p style={{margin:0}}><Typed typeSpeed={30} stopped={true} onComplete={() => {this.showBirthdayInput(); this.birthdayInput.focus()}} typedRef={(birthdayType) => { this.birthdayType = birthdayType }} showCursor={false} strings={['Great! Now, tell me your birthday:']}/> 
                        <input ref={(input) => { this.birthdayInput = input }} 
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
                        strings={['Calculating results']}
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
                        strings={['Ready!']}
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