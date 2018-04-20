import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import '../css/ContentView.css';
class ContentView extends Component {
    
    render() {

        let filteredMovies = this.props.movies.filter(
        (movie) => {
          return movie.title.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1;
            }
        );

        var items = filteredMovies.map((movie) => {
          return <CategoryItem key = {movie.id}
          movie = {movie} showMore = {this.showMore}/>
        });
       
        return(
        <ul>
        {
          items
        }
        </ul>
        );

    }
}

export default ContentView;