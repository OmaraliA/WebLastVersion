import React, { Component } from 'react';
import constants from '../conf/constants';
import img1 from '../img/aceventura.jpeg';
import img2 from '../img/bigdaddy.jpeg';
import '../css/Comedy.css';
import '../css/CategoryItem.css';

class Comedy extends Component {
		constructor(props){
    super(props);
	    this.state = {
	      movies: []
	    }
  	}
  render() {

 
    return (
      <div className ="comedies">
          <h1 className="title">Comedy films</h1>   
        <p className="App-intro">
        
      <ul className="contacts">
                        { this.state.movies.map((contact,index) =>
                          <li key={index} className="chip" 
                            name={contact.name}

                            >     

                              <img src={constants.SERVER_BASE_URL + this.state.movie.image} alt="im" />
                                 
                                 
                              </li>
                       
                        )}

                    </ul>
     
          
        </p>
      </div>
    );
  }
}
export default Comedy ;
