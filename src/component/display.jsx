import Axios from 'axios';
import React, { Component } from 'react';

class Display extends Component {

    state = {
        movies: [],
        post_path: "",
    }

    onShow = async () => {
        const promise = Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c3b918399cd5c79edc572b39e29235bd&language=en-US&page=1");
        const res = await promise;
        this.setState({ movies: res.data.results });
        // console.log(res.data.results);
    }

    getImage = async () => {
        const { movies } = this.movies
        movies.map(movie => {
            const path = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
            const title = movie.title;
            < img src={path} alt={title} />
        })
    }

    render() {
        const { movies } = this.state;

        return (
            <>
                <div>
                    <h1>Display page</h1>

                    <button onClick={this.onShow}>test</button>
                    <button onClick={this.getImage}>test2</button>
                    {movies.map(movie => {
                        const path = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
                        return (
                            <div className="card">
                                <img src={path} width={55 * 3} height={80 * 3} alt={movie.title} />
                                <div>
                                    <p className="card-text">{movie.title}</p>
                                </div>
                            </div>
                        )
                    })}

                    {/* <div className="card">
                        <img className="card-img-top" src="https://image.tmdb.org/t/p/w500/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Movie Title...</p>
                        </div>
                    </div> */}

                </div >
            </>
        );
    }
}

export default Display;