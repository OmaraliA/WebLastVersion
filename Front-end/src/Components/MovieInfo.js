
import React, { Component } from 'react';
import '../css/MovieInfo.css'
import client from '../Client'
import constants from '../conf/constants';

class MovieInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      commentText: '',
      comments: [],
      nextId: 0
    };
    this.handleInput = this.handleInput.bind(this);
     this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    client.getComments((comment) => {
      this.setState({
        comments: comment
      });
    });
  }

  handleInput(e){
    this.setState({commentText: e.target.value});
    console.log(this.state.commentText);
  }

  handleClick(e){
     let comments = this.state.comments.slice();
     const data = {
      'text': this.state.commentText,
      'movie_id': this.props.movie.id,
    }

    comments.push({id: this.state.nextId, text: this.state.commentText});
    this.setState({
      comments: [...this.state.comments, data],
      commentText: ''
    });

    client.AddComment(data, (com) => {
      if (com)
        console.log('Created!');
    });  
  }

  render() {
     var items = this.state.comments.map((comment, index) =>
      <li key={index}>
     {(comment.movie_id === this.props.movie.id) && ( 
      <label> Guest: {comment.text}</label>
     )}
     
      </li>

    );
  
  
    return (

<div className="all">
<ul>
<div className="inside">
      <div className= "info">
      <div className="images">
       <img className="img" alt = "img" src={constants.SERVER_BASE_URL + this.props.movie.image}/>
       </div>
      <div className="desk">
        <p className="names">{this.props.movie.title}</p>
       
        <p className="name">{this.props.movie.description}<br/>
 
        <a href="http://facebook.com"> <i id="icons" className="facebook square icon"></i></a>
       <a href="http://whatsapp.com">  <i id="icons" className="whatsapp icon"></i></a>
       <a href="http://twitter.com">  <i id="icons" className="twitter icon"></i></a><br/>

        </p>
<div id="scroll">
 <ul><p className="items">{items}</p>
        <p className="com">Leave comment here</p></ul>
       </div>
      </div>
        <textarea id="comments" value = {this.state.commentText} onChange = {this.handleInput}/>
        <input id="commentss"className="ui inverted blue button" type = "submit" value = "Comment" onClick = {this.handleClick}/>
      </div>
       </div>
      </ul>

      </div>
    );
  }
}

export default MovieInfo;
