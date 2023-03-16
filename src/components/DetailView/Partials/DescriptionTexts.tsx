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
	flex: 3;
	padding: 0 1rem;
`

const MovieInfoItem = styled.li`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	align-items: center;
	width: 100%;
	margin-bottom: 0.5rem;
	border-bottom: 1px solid #fff;
	padding-bottom: 0.5rem;
	color:#5089D5
	padding: 0.8rem 0;



	&:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}
	
`

const MovieInfoTitle = styled.span`
	font-size: 1.2rem;
	font-weight: 600;
	color: #fff;
`

const MovieInfoValue = styled.span`
	font-size: 1.2rem;
	font-weight: 400;
		color:#5089D5

`
const MovieDescription = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	color: #fff;
	margin-bottom: 1rem;
	margin-top: 1rem;
`;
const GerenBadge = styled.div`
	border-radius: 0.5rem;
	font-size: 1.2rem;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 0.5rem;
	padding: 0.5rem ;
	color: #fff;
	background: #2D2321;
  border: 1px solid;

`



export default function DescriptionTexts({ movie }: { movie: Movie }) {
	return (
		<MovieInfoList>
			<GerenBadge>
				{movie.genre}
			</GerenBadge>
			<MovieDescription>
				{movie.description}
			</MovieDescription>
			<MovieInfoItem>
				<MovieInfoTitle>Director</MovieInfoTitle>
				<MovieInfoValue>
					{movie.director}
				</MovieInfoValue>
			</MovieInfoItem>
			<MovieInfoItem>
				<MovieInfoTitle>Writers</MovieInfoTitle>
				<MovieInfoValue>
					{movie.writers?.map((writer) => writer).join(', ')}

				</MovieInfoValue>
			</MovieInfoItem>
			<MovieInfoItem>
				<MovieInfoTitle>Stars</MovieInfoTitle>
				<MovieInfoValue>
					{movie.actors?.map((actor) => actor).join(', ')}
				</MovieInfoValue>
			</MovieInfoItem>
		</MovieInfoList>
	)
}
