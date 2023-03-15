/** @format */

import { optionsType } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
	const options: optionsType = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": process.env.NEXT_PUBLIC__APIKEY,
			"X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
		},
	};

	const response = await fetch(
		"https://imdb-top-100-movies.p.rapidapi.com/",
		options
	);
	const data = await response.json();
	return NextResponse.json(data);
}
