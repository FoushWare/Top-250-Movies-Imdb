/** @format */

// mock rest apis
import { rest } from "msw";
// import json data
import movies from "./data/movies.json";

export const handlers = [
	rest.get("/api/movies", (req, res, ctx) => {
		// movie consists of
		// rank, title, thumbnail, rating, id, year, image, description, trailer, genre, director, writers, imdbid, imDbRating, yourRating, actors
		return res(ctx.status(200), ctx.json(movies));
	}),
	rest.get("/api/movies/:id", (req, res, ctx) => {
		const movie = movies.find((movie) => movie.id === req.params.id);
		return res(ctx.json(movie));
	}),
];
