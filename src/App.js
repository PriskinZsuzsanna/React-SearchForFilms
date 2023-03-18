import axios from 'axios';
import { useState } from 'react'
import './App.css';
import Film from './components/Film';

function App() {


  const [search, setSearch] = useState("")
  const [film, setFilm] = useState({})

  const getMovie = () => {
    axios.get(`https://www.omdbapi.com/?t=${search}&apikey=3eff947d`)
      .then(res => setFilm(res.data))
      .catch(err => console.log(err))

      setSearch("")
  }
  console.log(film)

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Find your favourite movies!</h1>
          <input type="text" value={search} placeholder="Game of thrones..."
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          onKeyUp={(e) => {
            if(e.keyCode == "13"){
              getMovie()
            }
          }}
          />
          <button onClick={getMovie}>Search</button>
        </div>
        <div className="result-container">
          {film &&
            <Film
              poster={film.Poster}
              title={film.Title}
              year={film.Year}
              actors={film.Actors}
              genre={film.Genre}
              imdbRating={film.imdbRating}
              metascore={film.Metascore}
              plot={film.Plot}
            />

          }
        </div>
      </div>

    </div>
  );
}

export default App;
