import { useQuery } from '@tanstack/react-query'

const fetchMovies = async (limit = 10) => {
	// make call to our API  from  api endpoint api/movies
	const data = await fetch('/api/movies');
	// catch errors of the fetch call
	if (!data.ok) throw new Error('Error fetching movies');
	const parsed: any = await data.json();
	if (parsed.length === 0) return [];
	const movies = parsed.slice(0, limit);
	return movies;

}

const useMovies = (limit: number | undefined) => {

	const { data, isLoading, isFetching }
		= useQuery({
			queryKey: ['movies', limit],
			queryFn: () => fetchMovies(limit),
		})
	return { data, isLoading, isFetching }
}

export { useMovies, fetchMovies }