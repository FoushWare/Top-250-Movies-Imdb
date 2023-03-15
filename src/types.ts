/** @format */

export type Movie = {
	rank: number;
	title: string;
	thumbnail: string;
	rating: string;
	id: string;
	year: number;
	image: string;
	description: string;
	trailer: string;
	genre?: string[] | null;
	director?: string[] | null;
	writers?: string[] | null;
	imdbid: string;
	imDbRating?: string;
	yourRating?: number;
};

export type Movies = {
	data: Movie[];
	isLoading: boolean;
	isFetching: boolean;
};

// options types for fetch
export type optionsType = {
	method: string;
	headers: {
		"X-RapidAPI-Key"?: string;
		"X-RapidAPI-Host"?: string;
	};
};
