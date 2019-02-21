import React, { Component } from 'react';
import MovieCard from './movieCard/MovieCard'
import AddMovie from './addMovie/AddMovie'
import './App.scss';
class App extends Component {
  state={
    movies: [
      {
        title:"star wars",
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
          releaseDate:2015,
          rating:3,
      },
      {
        title:"star wars",
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
          releaseDate:2015,
          rating:3,
      },
    ],
    filter: '',
  }

  addMovie = (movie) => {
    // let newMovies = this.state.movies
    // newMovies.push(movie)
    // this.setState({
    //   movies: newMovies
    // })
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }

  onFilterChange = (filter) => {
    this.setState({
      filter
    })
  }

  render() {
    const { movies, filter } = this.state
    return (
      <div className="app">
      <input onChange={(e) => this.onFilterChange(e.target.value)} value={filter} type="text" />
        <div className="movies">
        {
          movies
          .filter(movie => {
            return movie.title.includes(filter)
          })
          .map(movie => (
            <MovieCard 
              title={movie.title}
              image={movie.image}
              rating={movie.rating}
              releaseDate={movie.releaseDate}
            />
          ))
        }
        </div>
        
      <AddMovie 
        addMovie={this.addMovie}
      />
      </div>
    );
  }
}

export default App;
