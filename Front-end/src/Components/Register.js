import React, { Component } from 'react';
import client from '../Client.js'
import '../css/Register.css';

class Register extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.state = {
      items: [],
      popupVisible: false,
      passwordInput: '',
      emailInput: '',
      repeated_password: ''
    };
  }

  componentDidMount(){
    client.getRegister((logins) => {
      this.setState({
        items: logins
      });
    });
  }

  handleChange(e){
    this.setState({passwordInput: e.target.value});
    console.log(this.state.passwordInput);
  }

  handleEmailChange(e){
    this.setState({emailInput: e.target.value});
  }

  handleChangeConfirm(e){
    this.setState({repeated_password: e.target.value});
  }

  handleClick() {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      //document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      //document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
       popupVisible: !prevState.popupVisible,
    }));
  }
  
  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    
    this.handleClick();
  }

  handleLogin(){


    if(this.state.emailInput.length <= 0 || this.state.passwordInput.length <= 0 || 
      this.state.repeated_password.length <= 0 || this.state.passwordInput.length < 8){
      console.log('inv');
      alert('Invalid inputs, try again!');
    }else if(this.state.passwordInput !==this.state.repeated_password){
      alert('Passwords does not match, try again!');
    }else if(this.state.emailInput.indexOf('@') === -1){
      alert('Invalid email, try again!');
    }else{
      let data = {
      'email': this.state.emailInput,
      'password': this.state.passwordInput
    }

    client.createRegister(data, (user) => {
      if(user){
        alert('you are succesfully registered!');
        console.log('resistered');
      }
    });

    this.setState(function(prevState){
      return {
        popupVisible: !prevState.popupVisible
      };
    });
    }
  }

  render() {
    return (
    	<div className="container" >  	
			<button className="ui inverted white button" id="btnreg"   title='Register here!'
      onClick={this.handleClick} >Register</button>
      {this.state.popupVisible && (
        <div className="popover">
          <div>
          <div class="column">
            <form action="" method="get" class="ui large form">
              <div class="ui stacked secondary  segment">
                <div class="field">
                  <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input type="text" name="email" placeholder="E-mail address" onChange = {this.handleEmailChange}/>
                  </div>

                </div>
                <div class="field">
                  <div class="ui left icon input">
                    <i class="lock icon"></i>
                    <input type="password" name="password" placeholder="Password" onChange = {this.handleChange}/>
                  </div>
                </div>

                <div class="field">
                  <div class="ui left icon input">
                    <i class="lock icon"></i>
                    <input type="password" name="password" placeholder="Confirm password" onChange = {this.handleChangeConfirm}/>  
                  </div>
                </div>

                <div class="ui fluid large inverted blue submit button" onClick ={this.handleLogin.bind(this)}>Register</div>
              </div>
            </form> 
          </div>
          </div>
        </div>
      )}
      </div>
    );
  }
}
export default Register;