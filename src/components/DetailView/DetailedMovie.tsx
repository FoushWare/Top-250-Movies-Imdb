'use client';
import React from "react";
import { useMovie } from "@/Hooks/Movies/useMovie";
import styled from "styled-components";
import ShowCaseTexts from "./Partials/ShowCaseTexts";
import ShowCaseImageVideo from "./Partials/ShowCaseImageVideo";
import DescriptionTexts from "./Partials/DescriptionTexts";
import AddToWishtList from "./Partials/AddToWishtList";

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


	const DescriptionWrapper = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		@media (max-width: 768px) {
			flex-direction: column;
		}
	`;

	const DetailedPageWrapper = styled.div`
	background: #1F1F1F;
	`;

	const ContentWrapper = styled.div`
		width: 80%;
	margin: 0 auto;
	background: #2D2321;
	padding: 2rem;
	color: #fff;
	@media (max-width: 768px) {
		width: 100%;
	}
	`;





	return (
		<div>
			{
				isLoading ? (
					<p> Loading...</p>
				) : (
					<DetailedPageWrapper>
						<ContentWrapper>
							<ShowCaseTexts movie={data} />
							<ShowCaseImageVideo movie={data} />
							<DescriptionWrapper>
								<DescriptionTexts movie={data} />
								<AddToWishtList />
							</DescriptionWrapper>
						</ContentWrapper>
					</DetailedPageWrapper>
				)
			}
		</div >
	);
}
