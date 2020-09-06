import { connect } from 'react-redux';
import MovieInfo from './Container';
import { ApplicationState } from '../../types';
import { getMovieInfo } from '../../store/actions';

const mapStateToProps = ({ selectedMovie, isLoading }: ApplicationState) => ({
  selectedMovie: {
    "Title": "No Country for Old Men",
    "Year": "2007",
    "Rated": "R",
    "Released": "21 Nov 2007",
    "Runtime": "122 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Ethan Coen, Joel Coen",
    "Writer": "Joel Coen (screenplay), Ethan Coen (screenplay), Cormac McCarthy (novel)",
    "Actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
    "Plot": "In rural Texas, welder and hunter Llewelyn Moss (Josh Brolin) discovers the remains of several drug runners who have all killed each other in an exchange gone violently wrong. Rather than report the discovery to the police, Moss decides to simply take the two million dollars present for himself. This puts the psychopathic killer, Anton Chigurh (Javier Bardem), on his trail as he dispassionately murders nearly every rival, bystander and even employer in his pursuit of his quarry and the money. As Moss desperately attempts to keep one step ahead, the blood from this hunt begins to flow behind him with relentlessly growing intensity as Chigurh closes in. Meanwhile, the laconic Sheriff Ed Tom Bell (Tommy Lee Jones) blithely oversees the investigation even as he struggles to face the sheer enormity of the crimes he is attempting to thwart.",
    "Language": "English, Spanish",
    "Country": "USA, Mexico",
    "Awards": "Won 4 Oscars. Another 160 wins & 138 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
    "Metascore": "91",
    "imdbRating": "8.1",
    "imdbVotes": "828,845",
    "imdbID": "tt0477348",
    "Type": "movie",
    "DVD": "07 Apr 2009",
    "BoxOffice": "$74,223,625",
    "Production": "Miramax Films",
    "Website": "N/A",
    "Response": "True"
},
  isLoading
});

const mapDispatchToProps = {
  getMovieInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);