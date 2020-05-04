const baseURL = 'http://localhost:3000/api/movies/';

export default{
  getMovies(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  deleteMovie(id){
    console.log('delete service run');
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
    .then(res => res.json())
  },
  selectMovie(id){
    return fetch(baseURL + id)
    .then(res => res.json())
  }
};
