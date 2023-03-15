import styled from 'styled-components';
import MovieCard from '../../MovieCard';


// list of movies

const FeedStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0px 19px;
`;


// 10 movies from IMDB
const MovieList = [
	{
		"rank": "1",
		"title": "The Shawshank Redemption",
		"fullTitle": "The Shawshank Redemption (1994)",
		"year": "1994",
		"image": "https://m.media-amazon.com/images/M/MV5BMTMxMjM5NDMzOF5BMl5BanBnXkFtZTcwMjIwNjUzMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
		"crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
		"imDbRating": "9.3",
		"imDbRatingCount": "2288414"
	},
	{
		"rank": "2",
		"title": "The Godfather",
		"fullTitle": "The Godfather (1972)",
		"year": "1972",
		"image": "https://m.media-amazon.com/images/M/MV5BMTIwNDYzMjA1M15BMl5BanBnXkFtZTYwNjQwNjU3._V1_UX182_CR0,0,182,268_AL_.jpg",
		"crew": "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
		"imDbRating": "9.2",
		"imDbRatingCount": "1591618"
	},
	{
		"rank": "3",
		"title": "The Godfather: Part II",
		"fullTitle": "The Godfather: Part II (1974)",
		"year": "1974",
		"image": "https://m.media-amazon.com/images/M/MV5BMTI1MDY2MjQ0Ml5BMl5BanBnXkFtZTYwMzU0Mzg3._V1_UX182_CR0,0,182,268_AL_.jpg",
		"crew": "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
		"imDbRating": "9.0",
		"imDbRatingCount": "1096797"
	},
	{
		"rank": "4",
		"title": "The Dark Knight",
		"fullTitle": "The Dark Knight (2008)",
		"year": "2008",
		"image": "https://m.media-amazon.com/images/M/MV5BMTI4MDY4NjQwM15BMl5BanBnXkFtZTYwNjQwNjU3._V1_UX182_CR0,0,182,268_AL_.jpg",
		"crew": "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
		"imDbRating": "9.0",
		"imDbRatingCount": "2261589"
	},

];





export default function Feed() {
	return (
		<FeedStyles>
			{MovieList.map((movie) => (
				// movieInfo is the object that contains all the movie info
				<MovieCard key={movie.rank} item={movie} />
			))}


		</FeedStyles>
	)
}
