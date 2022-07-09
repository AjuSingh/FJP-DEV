import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Banner extends Component {
    render() {

        let movie = movies.results[0];
        return (
            <>
                {movie == "" ? (
                    <div class="spinner-border text-danger" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>) : (
                    <div className="card banner-card">
                        <img className="card-img-top banner-img" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Card image cap" />
                        <div className="card-body banner-details">
                            <h5 className="card-title">{movie.original_title}</h5>
                            <p className="card-text">{movie.overview}</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                )}
            </>
        )
    }
}
