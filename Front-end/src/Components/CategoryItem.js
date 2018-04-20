import React, { Component } from 'react';
import '../css/CategoryItem.css';
import MovieInfo from './MovieInfo';
import constants from '../conf/constants';

class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "show": false,
      "hide":true
    };
    this.showMore = this.showMore.bind(this);
  }

  showMore(id){
  
    this.setState({
      "show": !this.state.show,
      "hide":this.state.hide,
    })
  }

  render() {
    if(this.state.show) {
      return <MovieInfo movie={this.props.movie}/>;  
    } else {
      return (
        <div className = "cards">
          <div className="card1" onClick = {this.showMore}>
            <p className="Name">{this.props.movie.title}</p>
            <img src={constants.SERVER_BASE_URL + this.props.movie.image} alt="im" />
          </div>
        </div>
      );
    }
  }
}
export default CategoryItem;