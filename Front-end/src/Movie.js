import React, { Component } from 'react';
import Content from './Components/Content';
import './css/Movie.css';
import './css/SearchBar.css'
import './css/MenuItem.css';
import Login from './Components/Login';
import Register from './Components/Register';


import client from './Client'

class Movie extends Component {

  constructor(props){
    super(props);
    this.state = {
    /*  movies: [{}],*/
      movies: [],
      newmovies: [],
      comedies: [],
      romances: [],
      thrillers: [],
      horrors: [],
      favorites:[],
      filterText: '',
      isClicked:'new',
      isList:'true',
      message:'',
      error:'Error! You should logged in! Try again!'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickComedy = this.handleClickComedy.bind(this);
    this.handleClickRomance = this.handleClickRomance.bind(this);
    this.handleClickThriller = this.handleClickThriller.bind(this);
    this.handleClickHorror = this.handleClickHorror.bind(this);
    this.handleClickHome= this.handleClickHome.bind(this);
    this.handleLogin= this.handleLogin.bind(this);
    this.handleList= this.handleList.bind(this);
    this.handleClickError= this.handleClickError.bind(this);
  }

  componentDidMount(){
    client.getMovies((moviess) => {
      this.setState({
        movies: moviess
      });
    });

    client.getNewMovies((newmoviess) => {
      this.setState({
        newmovies: newmoviess
      });
    });

    client.getComedies((comedies) => {
      this.setState({
        comedies: comedies
      });
    });

    client.getRomances((romancess) => {
      this.setState({
        romances: romancess
      });
    });

    client.getThrillers((thrillerss) => {
      this.setState({
        thrillers: thrillerss
      });
    });

    client.getHorrors((horrorss) => {
      this.setState({
        horrors: horrorss
      });
    });

    client.getFavorites((horrorss) => {
      this.setState({
        horrors: horrorss
      });
    });
  

}

  handleChange(e){
    this.setState({filterText: e.target.value});
  }

  handleLogin(value){
    this.setState({
      isClicked: value,
      isList:true,
      //movies:this.state.horrors
    
    });
    console.log(value);
    console.log(this.state.isClicked);
  }

  handleList(value){
  
    this.setState({
      isClicked: value,
      isList:value,
      movies:this.state.horrors,
      message:'',
     
    });
    console.log(value);
    console.log(this.state.isClicked);
    console.log(this.state.movies);
  }


  handleClickHome(){
    this.setState({
      movies: this.state.newmovies
    })
    console.log("clicked");
  }

  handleClickComedy(){
    this.setState({
      movies: this.state.comedies
    })
    console.log("clicked");
  }

  handleClickUserPage() {
    
    this.setState({
      movies: this.state.comedies
    })
    console.log("clicked");

  }

  handleClickRomance(){
    this.setState({
      movies: this.state.romances
    })
    console.log("clicked");
  }

  handleClickThriller(){
    this.setState({
      movies: this.state.thrillers
    })
    console.log("clicked");
  }

  handleClickHorror(){
    this.setState({
      movies: this.state.horrors
    })
    console.log("clicked");
  }

  
  handleClickError(){
    this.setState({
      message: this.state.error,  
      movies:[]
    })
    console.log("clicked");
  }

  render() {
  console.log(this.state.isClicked);
    if(this.state.isClicked=='true') 
    {
     return (
      <div className="main"> 
          <div className="Left">
            <div className="menubar">
              <ul className="menuitems">
                <li onClick = {this.handleClickHome}><h1>Home</h1></li>
                <li onClick = {this.handleClickComedy}><h1>Comedy</h1></li>
                <li onClick = {this.handleClickRomance}><h1>Romance</h1></li>
                <li onClick = {this.handleClickThriller}><h1>Thriller</h1></li>
                <li onClick = {this.handleClickHorror}><h1>Horror</h1></li>
                <li onClick = {this.handleList.bind(this,this.state.isList)}><h1>My favorites</h1></li>
              </ul>
            </div>
          </div>

        <div className="Right">
        <div className="head">
          <div className="ui action left icon input" id="search">
            <input type="text" placeholder="Search..." value={this.state.filterText} onChange = {this.handleChange}/>
            <i className="search link icon"></i>
          
          </div>
     
          </div>

        </div>
      </div>
      );     
    }

  
   else {
      return (
      <div className="main"> 
          <div className="Left">
            <div className="menubar">
              <ul className="menuitems">
                <li onClick = {this.handleClickHome}><h1>Home</h1></li>
                <li onClick = {this.handleClickComedy}><h1>Comedy</h1></li>
                <li onClick = {this.handleClickRomance}><h1>Romance</h1></li>
                <li onClick = {this.handleClickThriller}><h1>Thriller</h1></li>
                <li onClick = {this.handleClickHorror}><h1>Horror</h1></li>
                <li onClick = {this.handleClickError}><h1>My favorites</h1></li>
                
              </ul>
            </div>
          </div>

        <div className="Right">
        <div className="head">
          <div className="ui action left icon input" id="search">
            <input type="text" placeholder="Search..." value={this.state.filterText} onChange = {this.handleChange}/>
            <i className="search link icon"></i>
          
          </div>
          <div className="login">
            <Login handleLogin = {this.handleLogin} />
          </div>

          <div className="register">
            <Register/>
          </div>
          <p className="error">{this.state.message}</p>
          </div>
         
            <Content movies = {this.state.movies} filterText = {this.state.filterText} />
          
        </div>
      </div>
      );
  }
}
  
}

export default Movie;