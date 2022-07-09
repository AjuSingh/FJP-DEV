import React, { Component } from 'react'
import { movies } from './getMovies'


export default class List extends Component {
    constructor() {
        super();
        this.state = {
            hover: ''
        }
    }


    handleEnter = (id) => {
        this.setState({ hover: id });
    }


    handleLeave=()=>{
        this.setState({ hover:''})
    }

    render() {
        let moviesArr = movies.results;
        return (
            <>
                {
                    moviesArr.length === 0 ?
                        (<div class="spinner-grow text-success" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>)
                        :
                        (
                            <div>
                                <h1 className="text-center"><strong>Trending</strong></h1>
                                <div className="list-cont">
                                    {
                                        moviesArr.map((movieObj) => {
                                            return (
                                                <div className="card list-card" onMouseEnter={() => this.handleEnter(movieObj.id)} onMouseLeave={this.handleLeave}>
                                                    <img className="card-img-top list-img" src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt="Card image cap" />
                                                    <div className="card-body list-details">
                                                        <h5 className="card-title">{movieObj.original_title}</h5>
                                                      { this.state.hover===movieObj.id &&  <a href="#" class="btn btn-primary">Add to Favorites</a> }
                                                    </div>
                                                </div>
                                            )
                                        })}
                                </div>
                                <div className="pagination">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
            </>
        )
    }
}
