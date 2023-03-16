import { Movie } from '@/types'
import React from 'react'
import styled from 'styled-components'

const MovieInfoList = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin: 0;
	padding: 0;
	list-style: none;
`

const MovieInfoItem = styled.li`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 0.5rem;
`

const MovieInfoTitle = styled.span`
	font-size: 1.2rem;
	font-weight: 600;
	color: #fff;
`

const MovieInfoValue = styled.span`
	font-size: 1.2rem;
	font-weight: 400;
	color: #fff;
`



export default function DescriptionTexts({ movie }: { movie: Movie }) {
	return (
		<MovieInfoList>
			<MovieInfoItem>
				<MovieInfoTitle>Director</MovieInfoTitle>
				<MovieInfoValue>{movie.director}</MovieInfoValue>
			</MovieInfoItem>
			<MovieInfoItem>
				<MovieInfoTitle>Writer</MovieInfoTitle>
				<MovieInfoValue>{movie.writers}</MovieInfoValue>
			</MovieInfoItem>
			<MovieInfoItem>
				<MovieInfoTitle>Actors</MovieInfoTitle>
				<MovieInfoValue>{movie.actors}</MovieInfoValue>
			</MovieInfoItem>
		</MovieInfoList>
	)
}
