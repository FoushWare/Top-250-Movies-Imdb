/** @format */

import { optionsType } from "@/app/api/types";
import { useQuery } from "@tanstack/react-query";

const fetchMovies = async (limit = 10) => {
	const options: optionsType = {
		method: "GET",
		headers: {
			"x-rapidapi-key": process.env.NEXT_PUBLIC__APIKEY,
			"x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
		},
	};
	const data = await fetch(
		"https://imdb-top-100-movies.p.rapidapi.com/",
		options
	);
	const parsed = await data.json();
	const movies = parsed.slice(0, limit);
	return movies;
};

const useMovies = (limit: number | undefined) => {
	return useQuery({
		queryKey: ["movies", limit],
		queryFn: () => fetchMovies(limit),
	});
};

export { useMovies, fetchMovies };
