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
 
  }

  componentDidMount(){
    client.getMovies((moviess) => {
      this.setState({
        movies: moviess
      });
    });

    client.getNewMovies((newmoviess) => {
      this.setState({
        newmovies: newmoviess,
        
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

    client.getFavorites((favoritess) => {
      this.setState({
        favorites: favoritess
      });
    });


  }

  handleChange(e){
    this.setState({filterText: e.target.value});
  }

  handleLogin(value){
    this.setState({
      isClicked: value,
      //movies:this.state.horrors
    });
    console.log(value);
    console.log(this.state.isClicked);
  }

  handleList(value){
    if(this.state.isClicked === 'true'){
      this.setState({
        movies:this.state.favorites,
      });
    }else{
      alert('You must authorize!');
    }
    console.log(value);
    console.log(this.state.isClicked);
    console.log(this.state.movies);
  }

  handleClickHome(){
    this.setState({
      movies: this.state.newmovies,
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
      movies: this.state.favorites,
    })
    console.log("clicked");
  }

  handleClickRomance(){
    this.setState({
      movies: this.state.romances,

    })
    console.log("clicked");
  }

  handleClickThriller(){
    this.setState({
      movies: this.state.thrillers,
    })
    console.log("clicked");
  }

  handleClickHorror(){
    this.setState({
      movies: this.state.horrors,
    })
    console.log("clicked");
  }

  render() {
  console.log(this.state.isClicked);
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
              <li onClick = {this.handleList}><h1>My favorites</h1></li>
            </ul>
          </div>
        </div>

      <div className="Right">
      <div className="head">
        <div class="ui action left icon input" id="search">
          <input type="text" placeholder="Search..." value={this.state.filterText} onChange = {this.handleChange}/>
          <i className="search link icon"></i>
         
        </div>
        <div className="login">
        <Login handleLogin = {this.handleLogin} />
        </div>

        <div className="register">
          <Register/>
        </div>
        </div>
          <Content movies = {this.state.movies} filterText = {this.state.filterText} isClicked={this.state.isClicked}/>
      </div>
    </div>
    );     
  }
}

export default Movie;