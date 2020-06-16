import React from "react";
import MovieRow from "./MovieRow";
import $ from "jquery";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.performSearch("avengers");
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?&api_key=7667fb1d96543402a4a8659ca126c643&query=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");

        const results = searchResults.results;

        var movieRows = [];

        results.forEach((movie) => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;

          const movieRow = <MovieRow key={movie.id} movie={movie} />;

          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      },
    });
  }

  searchChangeHandler(event) {
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div>
        <table className="header">
          <tbody>
            <tr>
              <td>
                <img width="50px" src="./MovieDB.png" alt="MovieDB Icon" />
              </td>
              <td className="title">
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="searchArea">
          <input
            onChange={this.searchChangeHandler.bind(this)}
            placeholder="Enter search term"
          />
          <i className="fas fa-search"></i>
        </div>

        {this.state.rows}
      </div>
    );
  }
}

export default App;
