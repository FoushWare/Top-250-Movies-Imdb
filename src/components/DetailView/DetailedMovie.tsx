'use client';
import React from "react";
import { useMovie } from "@/Hooks/Movies/useMovie/useMovie";
import styled from "styled-components";
import ShowCaseTexts from "./Partials/ShowCaseTexts";
import ShowCaseImageVideo from "./Partials/ImagesVideos/ShowCaseImageVideo";
import DescriptionTexts from "./Partials/DescriptionTexts";
import AddToWishtList from "./Partials/AddToWishtList";
import Header from "../Shared/Header";
import LoadingSpinner from "../Shared/LoadingSpinner";

export default function DetailedMovie({ id }: { id: string | undefined }) {

	const { data, isLoading, isFetching } = useMovie(id);

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
		<>
			<Header />
			{
				isLoading ? (
					<LoadingSpinner />
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
		</ >
	);
}
