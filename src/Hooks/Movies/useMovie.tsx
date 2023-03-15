import { useQuery } from '@tanstack/react-query'

const fetchMovie = async (id: number | undefined) => {
	// make call to our API  from  api endpoint api/movies/[id]
	const data = await fetch(`/api/movies/${id}`);
	const parsed = await data.json();
	return parsed;
}

const useMovie = (id: number | undefined) => {
	return useQuery({
		queryKey: ['movie', id],
		queryFn: () => fetchMovie(id),

	})
}

export { useMovie, fetchMovie }