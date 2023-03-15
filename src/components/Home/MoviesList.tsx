import { Movie } from '@/types';
import { useMovies } from '@/Hooks/Movies/useMovies/useMovies';
import React, { useState } from 'react'
import styled from 'styled-components';
import MovieCard from './MovieCard';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';



const PageWrapperStyles = styled.div`
		background-color: #C7C7C3;
		width: 100%;
		`;
const PageContentStyles = styled.div`
		background:#fff;
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		`;

const MoviesList = () => {
	const [moviesCount, setMoviesCount] = useState(25);

	const { data, isLoading, isFetching } = useMovies(moviesCount);

	if (isLoading) return <p>Loading...</p>
	if (isFetching) return <p>Fetching...</p>

	return (
		<PageWrapperStyles>
			<PageContentStyles >
				<Main /> {/* Left Column */}
				<Sidebar /> {/* Right Column */}
			</PageContentStyles>
		</PageWrapperStyles>

	)
}
export default MoviesList