/** @format */

import { optionsType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: { params: any }) {
	const options: optionsType = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": process.env.NEXT_PUBLIC__APIKEY,
			"X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
		},
	};
	// get the id from the request
	const { id } = context.params;
	const response = await fetch(
		`https://imdb-top-100-movies.p.rapidapi.com/${id}`,
		options
	);
	const data = await response.json();
	return NextResponse.json(data);
}
