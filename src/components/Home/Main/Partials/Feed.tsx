import { useMovies } from '@/Hooks/Movies/useMovies/useMovies';
import { Movie } from '@/types';
import { useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../../MovieCard';


// list of movies

const FeedStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0px 19px;
`;

const LoadMoreButton = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background: #f0f0f0;
	margin: 0 auto;
	margin-top: 10px;
	padding: 10px;
	border-radius: 5px;
	background: #F5C518;
	font-weight: bold;
  font-size: 1rem;
	:hover {
		cursor: pointer;
		background: #F5C518;

	}
`;









export default function Feed() {

	const [moviesCount, setMoviesCount] = useState(25);

	const { data, isLoading, isFetching } = useMovies(moviesCount);

	if (isLoading) return <p>Loading...</p>
	if (isFetching) return <p>Fetching...</p>

	return (
		<FeedStyles>
			{data.map((movie: {
				[x: string]: key | null | undefined; movie: Movie
			}) => (
				<MovieCard key={movie.rank} item={movie} />
			))}

			{/* load More Button */}
			<LoadMoreButton onClick={() => setMoviesCount(moviesCount + 25)}
			>
				Load More
			</LoadMoreButton>

		</FeedStyles>
	)
}
