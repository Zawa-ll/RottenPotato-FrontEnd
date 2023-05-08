import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Axios from 'axios';


class FetchingTesting extends Component {
    state = {
        movies: [],
        title: "known_title",
        poster: "known_poster"
    }

    async componentDidMount() {
        const promise = Axios.get("http://localhost:9201/users");
        const response = await promise;
        console.log(response);
    }


    onPostUsers = async () => {
        const obj = {
            userId: 33, username: "testName2", password: "testPassword2",
            firstname: "testFirstName2", lastname: "testLastName2",
        }

        const promise = Axios.post("http://localhost:9201/user", obj);
        const reference = await promise;
        console.log(reference.data);
    }

    onGetMovies = async () => {
        const promise = Axios.get("https://api.themoviedb.org/3/search/movie?api_key=c3b918399cd5c79edc572b39e29235bd&query=Batman");
        const response = await promise;
        const movies = response.data.results;
        console.log(movies);
        this.setState({ movies });
    }



    renderInfo = (response) => {
        console.log(response);
        this.setState({
            movies: response.movies,
            title: response.title,
            poster: response.poster_path
        })
    }

    render() {
        return (
            <>
                <button onClick={this.componentDidMount}>Fetching Get  Operation</button>
                <button onClick={this.onPostUsers}>Fetching Post Operation</button>
                <button onClick={this.onGetMovies}>Fetching Movies from MTDB</button>


                {/* {this.onRender(this.movies)} */}


                <h3>
                    title:
                    {this.state.movies.length === 0 ? "" : this.state.movies[1].title}

                </h3>
                <h3>
                    image:
                    <img src={this.state.movies.length === 0 ? "" : this.state.movies[1].poster_path} alt="poster" />
                </h3>
                <h3>
                    poster_path:{this.state.movies.length === 0 ? "" : this.state.movies[1].poster_path}
                </h3>
            </>
        );
    }
}

export default FetchingTesting;
