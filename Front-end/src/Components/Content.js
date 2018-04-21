import React, { Component } from 'react';
import ContentView from './ContentView';
import '../css/Content.css';


class Content extends Component {
    

  render() {
    return (
    	<div className="Content">
    	
    		<div className="Bottom">
    			<ContentView movies = {this.props.movies} username = {this.props.username} favClicked={this.props.favClicked} filterText={this.props.filterText } isClicked={this.props.isClicked}/>
    		</div>
    	</div> 
    );
  }
}
export default Content;

