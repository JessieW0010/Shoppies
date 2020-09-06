import { connect } from 'react-redux';
import SearchResult from './Container';
import { ApplicationState } from '../../types';

const mapStateToProps = (store: ApplicationState) => ({
//   movies: store.movies,
  movies: [
    {
        "Title": "No Country for Old Men",
        "Year": "2007",
        "imdbID": "tt0477348",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
    },
    {
        "Title": "The Making of 'No Country for Old Men'",
        "Year": "2008",
        "imdbID": "tt1205061",
        "Type": "movie",
        "Poster": "N/A"
    },
    {
        "Title": "No Country for Old Men: Diary of a Country Sheriff",
        "Year": "2008",
        "imdbID": "tt5431938",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc2NTExNTQ5N15BMl5BanBnXkFtZTcwNjg4MjQ4MQ@@._V1_SX300.jpg"
    },
    {
        "Title": "No Country for Old Men",
        "Year": "1981",
        "imdbID": "tt1059210",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzFkYjkwYjQtN2EzNC00N2Y4LTgwOTctMjEyNzdmZTY1NmNjXkEyXkFqcGdeQXVyMjkyMzMwNA@@._V1_SX300.jpg"
    },
    {
        "Title": "My Country No More",
        "Year": "2018",
        "imdbID": "tt2486792",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmFkY2E4YzItMzI3YS00NzNmLWE4YjUtOGVlNmZhMWY5Mjk0XkEyXkFqcGdeQXVyMjczMDY1MTY@._V1_SX300.jpg"
    },
    {
        "Title": "No Country for Old Men: Working with the Coens",
        "Year": "2008",
        "imdbID": "tt2996102",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc2NTExNTQ5N15BMl5BanBnXkFtZTcwNjg4MjQ4MQ@@._V1_SX300.jpg"
    },
    {
        "Title": "No Country for Old Men: Josh Brolin's Unauthorized Behind the Scenes",
        "Year": "2008",
        "imdbID": "tt5432816",
        "Type": "movie",
        "Poster": "N/A"
    },
    {
        "Title": "No Country for Old Yeller",
        "Year": "2010",
        "imdbID": "tt1534814",
        "Type": "movie",
        "Poster": "N/A"
    },
    {
        "Title": "No Country for Gay Old Men",
        "Year": "2008",
        "imdbID": "tt2009537",
        "Type": "movie",
        "Poster": "N/A"
    },
    {
        "Title": "No Country for Old Men: Press Timeline Interviews & Conversation",
        "Year": "2008",
        "imdbID": "tt5435222",
        "Type": "movie",
        "Poster": "N/A"
    }],
  isLoading: store.isLoading,
  searchTerm: "No country"
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
