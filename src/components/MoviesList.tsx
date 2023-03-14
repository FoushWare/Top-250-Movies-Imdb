import { useMovies } from '@/app/api/fetchFunctions';
import { Movie } from '@/app/api/types';
import React, { useState } from 'react'

const MoviesList = () => {
	const [moviesCount, setMoviesCount] = useState(25);

	const { data, isLoading, isFetching } = useMovies(moviesCount);

	if (isLoading) return <p>Loading...</p>
	if (isFetching) return <p>Fetching...</p>


	return (
		<>
			<h1>Movies List</h1>
			{data?.map((movie: Movie) => (
				<div key={movie.id}>
					<h2>{movie.title}</h2>
					<p>{movie.year}</p>
					<p>{movie.rating}</p>
					<p>{movie.rank}</p>
					<p>{movie.id}</p>
				</div>
			))}
			<button onClick={() => setMoviesCount(50)}>Show 50</button>
			<button onClick={() => setMoviesCount(100)}>Show 100</button>




		</>
	)
}
export default MoviesList