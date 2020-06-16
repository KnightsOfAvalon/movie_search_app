import React from "react";
import "./MovieRow.css";

class MovieRow extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <table className="movieRow" key={this.props.movie.id}>
        <tbody>
          <tr>
            <td className="poster">
              <img alt="poster" src={this.props.movie.poster_src} />
            </td>
            <td className="text">
              <h3 className="movieTitle">{this.props.movie.title}</h3>
              <p className="description">{this.props.movie.overview}</p>
              <input
                className="button"
                type="button"
                onClick={this.viewMovie.bind(this)}
                value="View"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
