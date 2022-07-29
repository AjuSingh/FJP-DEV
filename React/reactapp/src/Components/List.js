import React, { Component } from 'react'
import { movies } from './getMovies'
import axios from 'axios';


export default class List extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            curPage: 1,
            movies: [],
            parr: [1],
            fm: [] //this will store the id of the movies added to the favourites
        }
    }


    handleEnter = (id) => {
        this.setState({ hover: id });
    }


    handleLeave = () => {
        this.setState({ hover: '' })
    }

    changeMovie = async () => {
        console.log(this.state.curPage);
        console.log("change movie called");
        let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=${this.state.curPage}`);
        this.setState({
            movies: [...res.data.results]
        })
    }

    handlePrev = () => {
        if (this.state.curPage > 1) {
            this.setState({
                curPage: this.state.curPage - 1
            }, this.changeMovie)
        }
    }

    handleNext = () => {
        let tempArr = [];
        for (let i = 1; i <= this.state.parr.length + 1; i++) {
            tempArr.push(i);
        }
        this.setState({
            parr: [...tempArr],
            curPage: this.state.curPage + 1
        }, this.changeMovie)

    }

    handlePageNum = (pageNum) => {
        this.setState(
            {
                currPage: pageNum,
            },
            this.changeMovies
        );
    }

    handleFavourites = (movieObj) => {
        let localStorageMovies = JSON.parse(localStorage.getItem("movies")) || [];

        if (this.state.fm.includes(movieObj.id)) {
            localStorageMovies = localStorageMovies.filter(
                (movie) => movie.id != movieObj.id
            );
        }
        else localStorageMovies.push(movieObj);
        console.log(localStorageMovies);
        localStorage.setItem("movies", JSON.stringify(localStorageMovies));
        let tempData = localStorageMovies.map(movieObj => movieObj.id);
        this.setState({
            fm: [...tempData]
        });
    }

    async componentDidMount() {
        console.log("Component did mounted called..");
        let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=${this.state.curPage}`);
        // console.log(res.data);
        this.setState({
            movies: [...res.data.results]
        })
    }

    render() {
        let moviesArr = movies.results;
        return (
            <>
                {
                    this.state.movies.length === 0 ?
                        (<div class="spinner-grow text-success" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>)
                        :
                        (
                            <div>
                                <h1 className="text-center"><strong>Trending</strong></h1>
                                <div className="list-cont">
                                    {
                                        this.state.movies.map((movieObj) => {
                                            return (
                                                <div className="card list-card" onMouseEnter={() => this.handleEnter(movieObj.id)} onMouseLeave={this.handleLeave}>
                                                    <img className="card-img-top list-img" src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt="Card image cap" />
                                                    <div className="card-body list-details">
                                                        <h5 className="card-title">{movieObj.original_title}</h5>
                                                        {this.state.hover === movieObj.id && <a class="btn btn-primary" onClick={() => this.handleFavourites(movieObj)}> {this.state.fm.includes(movieObj.id) ? "Remove from favourites" : "Add to favourites"}</a>}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                </div>
                                <div className="pagination">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" onClick={this.handlePrev}>Previous</a></li>  
                                            {
                                                this.state.parr.map(pageNum => (
                                                    <li className="page-item">
                                                        <a className="page-link" onClick={() => this.handlePageNum(pageNum)}>
                                                            {pageNum}
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                            <li className="page-item"><a className="page-link" onClick={this.handleNext}>Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
            </>
        )
    }
}
