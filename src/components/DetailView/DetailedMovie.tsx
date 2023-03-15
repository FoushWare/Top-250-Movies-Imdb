'use client';
import React from "react";
import { useMovie } from "@/Hooks/Movies/useMovie";

export default function DetailedMovie({ id }) {

	// const { data, isLoading, isFetching } = useMovie(id);
	const isLoading = false;
	const data =
	{
		"rank": "1",
		"title": "The Shawshank Redemption",
		"fullTitle": "The Shawshank Redemption (1994)",
		"year": "1994",
		"image": "https://m.media-amazon.com/images/M/MV5BMTMxMjM5NDMzOF5BMl5BanBnXkFtZTcwMjIwNjUzMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
		"crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
		"imDbRating": "9.3",
		"imDbRatingCount": "2288414"
	}


	return (
		<div>
			{
				isLoading ? (
					<p> Loading...</p>
				) : (
					<>
						<h1>{data.title}</h1>
						<p>{data.year}</p>
						<p>{data.crew}</p>
						<p>{data.imDbRating}</p>
						<p>{data.imDbRatingCount}</p>


					</>
				)
			}
		</div >
	);
}
