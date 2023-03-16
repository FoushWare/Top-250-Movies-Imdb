import { Movie } from '@/types'
import React from 'react'


import styled from 'styled-components'
const ShowCaseTextsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;


`
const MovieTitle = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	margin: 0;
`
const MovieYear = styled.h2`
	font-size: 1.5rem;
	font-weight: 400;
	margin: 0;
`
const IMDBRating = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const RatingStar = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	background: url(/star.svg') no-repeat center;
	background-size: contain;
`
const Popularity = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	background: url('/popularity.svg') no-repeat center;
	background-size: contain;
`





export default function ShowCaseTexts({ movie }: { movie: Movie }) {
	return (
		<ShowCaseTextsWrapper>
			<MovieTitle>{movie.title}</MovieTitle>
			<MovieYear>{movie.year}</MovieYear>
			<IMDBRating>
				<RatingStar />
				{movie.imDbRating}
			</IMDBRating>
			<Popularity />
		</ShowCaseTextsWrapper>
	)
}
