import React, { Component } from 'react';
import client from '../Client.js'
import '../css/Login.css';

class Login extends Component {
    
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClickLogin = this.handleClick.bind(this);
    this.state = {
      username:'',
      password:'',
      items: [],
      priv:"Login",
      name:'',
      popupVisible: false,
      isToggleOn: true,
      isLogin:false,
      exists: false,
    };  
  }

  componentDidMount(){
    client.getRegister((logins) => {
      this.setState({
        items: logins
      });
    });
  }

  handleClickLogin() {
    this.setState(function(prevState) {
      return {isToggleOn: !prevState.isToggleOn};
    });
  }

  handleLogin(){

    var filteredItems1 = this.state.items.filter(
      (item) => {
        return item.email.indexOf(this.state.username) !== -1;
      }
    );

      var filteredItems2 = filteredItems1.filter((item) => {
          return item.password.indexOf(this.state.password) !== -1;
        });

    if(filteredItems2.length <= 0){
      alert('Invalid username or password');
    }
    else {
      alert('success');
      this.props.handleLogin('true');
    }


    this.setState(function(prevState){
      return {
        isToggleOn: !prevState.isToggleOn,
        popupVisible: !prevState.popupVisible
      };
    });
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
      isToggleOn: prevState.isToggleOn,
      isLogin:true
    }));
  }
  
  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    
    this.handleClick();
  }

  handleChangesName(e){
    this.setState({
      username: e.target.value
    })
  }

  handleChangesPassword(e){
    this.setState({
      password : e.target.value
    })
  }


  render() {
    console.log(this.state.priv)
    return (
      <div className="container" >
        
        <button className= "ui inverted white button" id="btnlog" 
          onClick ={this.handleClick.bind(this)} 
          title='Login here!'

          >
     {this.state.isToggleOn ? 'Login' : 'Logout'}
        </button>
        {this.state.popupVisible && this.state.isLogin && (
          <div
            className="popover"
          >
           <div className="ui middle aligned center aligned grid">
  <div className="column">
   

    <form action="" method="get" className="ui large form">
      <div className="ui stacked secondary  segment">
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input type="text" name="email" value={this.state.username} onChange = {this.handleChangesName.bind(this)} placeholder="E-mail address"/>
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" name="password" value={this.state.password}  onChange = {this.handleChangesPassword.bind(this)} placeholder="Password"/>
          </div>
        </div>
        <div className="ui fluid large inverted blue submit button" onClick ={this.handleLogin.bind(this)}> Login</div>
      </div>

    </form>
  
  </div>
</div>
          </div>
         )}

                {!this.state.isLogin &&  (
              console.log("fg")
         
         )}
      </div>
    );
  }
}



export default Login;

