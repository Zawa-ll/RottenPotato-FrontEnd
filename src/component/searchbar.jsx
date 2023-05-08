import React, { Component } from 'react';
import Axios from 'axios';
import DetailsButton from './detailsButton';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import { Redirect, Link } from 'react-router-dom';
import DetailPage from './detailPage';


class SearchBar extends Component {
    state = {
        movies: [],
        moviename: "",
        pageSize: 4,
        pagesCount: 1,
        currentPage: 1,
    }

    handleChange = ({ currentTarget: input }) => {
        const moviename = input.value;
        console.log(moviename);
        this.setState({ moviename });
    }

    handleSearch = async () => {
        const { moviename } = this.state;
        const promise = Axios.get("https://api.themoviedb.org/3/search/movie?api_key=c3b918399cd5c79edc572b39e29235bd&language=en-US&query=" + moviename)
        const res = await promise;

        const itemsCount = res.data.results.length;
        const pagesCount = itemsCount / this.state.pageSize;
        // console.log(itemsCount);
        // console.log(pagesCount);
        this.setState({
            movies: res.data.results,
            pagesCount: pagesCount
        });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleDetailClick = () => {
        <DetailPage test="s">
            {this.props.history.replace("/detailPage")}
        </DetailPage>
    }

    render() {
        const { movies, currentPage, pageSize } = this.state;
        const moviesPage = paginate(movies, currentPage, pageSize);
        return (
            <>
                <h3>Searching...</h3>
                < input onChange={this.handleChange} />
                <button onClick={this.handleSearch} className="btn btn-small btn-primary">Search</button>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Rating</th>
                            <th>ID</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    {movies.length === 0 ? null :
                        moviesPage.map(movie =>
                            <tbody key={movie.id}>
                                <tr>
                                    <td>{movie.title}</td>
                                    <td>{movie.release_date}</td>
                                    <td>{movie.vote_average}</td>
                                    <td>{movie.id}</td>
                                    <td>
                                        <button
                                            onClick={this.handleDetailClick}
                                            className="btn btn-primary"
                                        >Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }

                </table>
                <Pagination
                    itemsCount={this.state.movies.length}
                    pagesCount={this.state.pagesCount}
                    onPageChange={this.handlePageChange}
                    currentPage={this.state.currentPage}
                />
            </>
        )
    }
}

export default SearchBar;