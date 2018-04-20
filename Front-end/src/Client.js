const BASE_URL = 'http://localhost:8000/api';

module.exports = {
   
  getMovies(success){
    fetch(`${BASE_URL}/movies/`)
      .then(response => response.json())
      .then(success)
  }, 

  getNewMovies(success){
    fetch(`${BASE_URL}/movies/`)
      .then(response => response.json())
      .then(success)
  }, 

  getComedies(success){
    fetch(`${BASE_URL}/comedies/`)
      .then(response => response.json())
      .then(success)
  }, 

  getRomances(success){
    fetch(`${BASE_URL}/romances/`)
      .then(response => response.json())
      .then(success)
  }, 

  getHorrors(success){
    fetch(`${BASE_URL}/horrors/`)
      .then(response => response.json())
      .then(success)
  }, 

  getThrillers(success){
    fetch(`${BASE_URL}/thrillers/`)
      .then(response => response.json())
      .then(success)
  }, 

  getComments(success){
    fetch(`${BASE_URL}/comments/`)
      .then(response => response.json())
      .then(success)
  },
  
  getFavorites(success){
    fetch(`${BASE_URL}/favorites/`)
      .then(response => response.json())
      .then(success)
  },

  AddFavorites(data, success){
    console.log(JSON.stringify(data));
    fetch(`${BASE_URL}/favorites/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  },

  AddComment(data, success){
    fetch(`${BASE_URL}/comments/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  },

  getRegister(success){
    fetch(`${BASE_URL}/register/`)
      .then(response => response.json())
      .then(success)
  },

  createRegister(data, success){
   // console.log(JSON.stringify(data));
    fetch(`${BASE_URL}/register/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
      
    })
      .then(response => response.json())
      .then(success)
  }

/*

  deleteTodo(id, success){
    fetch(`${BASE_URL}/todos/${id}/`, {
      'method': 'DELETE'
    })
      .then(response => response.json())
      .then(success)
  }*/
}