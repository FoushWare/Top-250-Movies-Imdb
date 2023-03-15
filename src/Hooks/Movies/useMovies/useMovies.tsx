import { useQuery } from '@tanstack/react-query'

const fetchMovies = async (limit = 10) => {
	// make call to our API  from  api endpoint api/movies
	const data = await fetch('/api/movies');
	const parsed = await data.json();
	const movies = parsed.slice(0, limit);
	return movies;

}

const useMovies = (limit: number | undefined) => {
	return useQuery({
		queryKey: ['movies', limit],
		queryFn: () => fetchMovies(limit),
	})
}

export { useMovies, fetchMovies }