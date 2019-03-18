import React,{Component} from 'react';
import Typed from 'react-typed';
import MaskedInput from 'react-text-mask'

export default class TimeLeft extends Component{
    constructor(){
        super();
        this.state = {
            programStarted: false,
            isMale: true,
            birthday : '01/01/1970',
            isBirthdayInputVisible: false,
            tapped: false
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
        if(!tapped){ //if tap is not set, set up single tap
            this.setState({tapped:setTimeout(() => {
                this.setState({tapped: null});
                this.birthdayType.start();
               
            },200)});
            } else { 
                clearTimeout(tapped); 
                this.setState({tapped: null});
                 if (eventType === 'touchend' || eventKey === 'ArrowUp' || eventKey === 'ArrowDown') {
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
        debugger;
        this.setState({
            birthday: e.target.value
        });
    }

    render(){
        return(
            <div ref={(div) => {this.lifespanTimer = div}} className="lifespan-timer"  tabIndex="0" onKeyPress={this.handleKeyPress} onTouchEnd={this.startProgram}>
                <div className={`header ${this.state.programStarted ? 'invisible' : ''}`} >
                    <h1><Typed typeSpeed={30} strings={['Lifespan Timer']} showCursor={false} onComplete={() => {this.subtitle.start()}}/></h1>
                    <h3><Typed typeSpeed={30} stopped={true}  typedRef={(typed) => { this.subtitle = typed; }} showCursor={false} onComplete={() => {}} strings={['Find how much time you have left to live. <b>&lt;TOUCH&gt;</b> or press <b>&lt;ENTER&gt;</b> to start']}/></h3>
                </div>
                
                <div className={`lifespan-calculator ${this.state.programStarted ? '' : 'invisible'}`}>
                    < p > < Typed typeSpeed = {
                        30
                    }
                    stopped = {
                        true
                    }
                    typedRef = {
                        (typed) => {
                            this.genderSelect = typed
                        }
                    }
                    showCursor = {
                        false
                    }
                    onComplete = {
                        () => {
                            this.genderInput.start()
                        }
                    }
                    strings = {
                        ['Please, select your birth gender (<b>&lt;DOUBLE_TAP&gt;</b>, <b>&lt;UP&gt;</b> and <b>&lt;DOWN&gt;</b> arrows to change, <b>&lt;ENTER&gt;</b> or <b>&lt;TOUCH&gt;</b> to submit):']
                    }
                    />
                        <span id="gender-input" 
                                onKeyDown={this.handleSelectKeys} tabIndex="0"
                                onTouchEnd={this.handleSelectKeys} ref={(span) => {this.genderSpan = span}}>
                        <Typed  typeSpeed={30} tabIndex="0" startDelay={10}
                                onStart={()=> {this.genderSpan.focus()}}
                                showCursor={false}
                                onComplete={()=>{this.genderInput.showCursor = true}}
                                strings={this.state.isMale ? ['Male']:['Female']} stopped={true}
                                typedRef={(typed) => { this.genderInput = typed}}/>
                        </span>
                    </p>
                    <p><Typed typeSpeed={30} stopped={true} onComplete={() => {this.showBirthdayInput() }} typedRef={(typed) => { this.birthdayType = typed }} showCursor={false} strings={['Great! Now, type your birthday: ']}/> 
                        <MaskedInput name="birthday" className={`birthday-input ${this.state.isBirthdayInputVisible ? '' : 'invisible'}`} onChange={this.birthdayInputHandler} value={this.state.birthday} mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} ref={(input) => { this.birthdayInput = input }}/>
                    </p>
                </div>
            </div>
            
        )
    }
}