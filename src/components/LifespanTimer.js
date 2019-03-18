import React,{Component} from 'react';
import Typed from 'react-typed';

export default class TimeLeft extends Component{
    constructor(){
        super();
        this.state = {
            programStarted: false,
            isMale: true,
            birthday : '',
            isBirthdayInputVisible: false,
            tapped: false,
            birthdayValidationMessage : ['JooJ']
        }
        this.startProgram = this.startProgram.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSelectKeys = this.handleSelectKeys.bind(this);
        this.showBirthdayInput = this.showBirthdayInput.bind(this);
        this.birthdayInputHandler = this.birthdayInputHandler.bind(this);
    }

    handleKeyPress(e){
        if(e.key === 'Enter') this.startProgram();
    }

    handleSelectKeys(e) {
        var {tapped} = this.state;
        const eventType = e.type;
        const eventKey = e.key;
        if(eventType === 'touchend'){
            if(!tapped){ //if tap is not set, set up single tap
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
        if(value.length === 10 && value.substring(0,4) > 999){
            const now = new Date();
            this.birthdayValidationField.reset(true);
            if (now - date < 0) {
                this.birthdayValidationField.start();
                this.setState({ birthdayValidationMessage: ['Time traveling not yet supported. This date is not valid!'] });
            } else if (now - date >= 3130809164684){
                this.birthdayValidationField.start();
                this.setState({ birthdayValidationMessage: ['Jesus Christ, we have a vampire here. This date is not valid!']});
            } else{
                this.setState({ birthdayValidationMessage: ['']});
                this.birthdayInput.readOnly = true;
                this.birthdayValidationField.className = "invisible";
                this.finalText.start();
            }
        }
    }

    render(){
        return(
            <div ref={(div) => {this.lifespanTimer = div}} className="lifespan-timer"  tabIndex="0" onKeyPress={this.handleKeyPress} onTouchEnd={this.startProgram}>
                <div className={`header ${this.state.programStarted ? 'invisible' : ''}`} >
                    <h1><Typed typeSpeed={30} strings={['Lifespan Timer']} showCursor={false} onComplete={() => {this.subtitle.start()}}/></h1>
                    <h3><Typed typeSpeed={30} stopped={true}  typedRef={(subtitle) => { this.subtitle = subtitle; }} showCursor={false} onComplete={() => {}} strings={['Find how much time you have left to live. <b>&lt;TAP&gt;</b> or press <b>&lt;ENTER&gt;</b> to start']}/></h3>
                </div>
                
                <div className={`lifespan-calculator ${this.state.programStarted ? '' : 'invisible'}`}>
                    <p><Typed typeSpeed={30} stopped={true}  typedRef={(genderSelect) => { this.genderSelect = genderSelect }} showCursor={false} onComplete={() => {this.genderInput.start()}} strings={['Tell me birth gender (<b>&lt;DOUBLE_TAP&gt;</b>, <b>&lt;UP&gt;</b> and <b>&lt;DOWN&gt;</b> arrows, <b>&lt;ENTER&gt;</b> or  <b>&lt;TAP&gt;</b> to submit):']}/> 
                        <span id="gender-input" 
                                onKeyDown={this.handleSelectKeys} tabIndex="0"
                                onTouchEnd={this.handleSelectKeys} ref={(span) => {this.genderSpan = span}}>
                        <Typed  typeSpeed={30} tabIndex="0" startDelay={10}
                                onStart={()=> {this.genderSpan.focus()}}
                                showCursor={false}
                                onComplete={()=>{this.genderInput.showCursor = true}}
                                strings={this.state.isMale ? ['Male']:['Female']} stopped={true}
                                typedRef={(genderInput) => { this.genderInput = genderInput}}/>
                        </span>
                    </p>
                    <p style={{margin:0}}><Typed typeSpeed={30} stopped={true} onComplete={() => {this.showBirthdayInput(); this.birthdayInput.focus()}} typedRef={(birthdayType) => { this.birthdayType = birthdayType }} showCursor={false} strings={['Great! Now, type your birthday: ']}/> 
                        <input  ref={(input) => { this.birthdayInput = input }} 
                            type="date"     
                            onChange={this.birthdayInputHandler} 
                            value={this.state.birthday} 
                            className={`birthday-input ${this.state.isBirthdayInputVisible ? '' : 'invisible'}`} 
                            required="required"/>
                    </p>
                    <Typed className="validation-message" typeSpeed={30} tabIndex="0" startDelay={10}
                        style={{ color: 'red' }}
                        typedRef={(birthdayValidationField) => { this.birthdayValidationField = birthdayValidationField }}
                        showCursor={false}
                        strings={this.state.birthdayValidationMessage}
                        stopped={true} />
                    
                    <p>
                        <Typed typeSpeed={30} tabIndex="0" startDelay={10}
                        typedRef={(finalText) => { this.finalText = finalText }}
                        showCursor={false}
                        onComplete={() => {this.dots.start()}}
                        strings={['Calculating your results']}
                        stopped={true} />
                        <Typed typeSpeed={500} tabIndex="0" startDelay={10}
                        typedRef={(dots) => { this.dots = dots }}
                        showCursor={false}
                        onComplete={() => {this.ready.start()}}
                        strings={['.....']}
                        stopped={true} />
                        <Typed typeSpeed={30} tabIndex="0" startDelay={10}
                        typedRef={(ready) => { this.ready = ready }}
                        showCursor={false}
                        strings={['READY!']}
                        stopped={true} />
                    </p>
                </div>
            </div>
            
        )
    }
}