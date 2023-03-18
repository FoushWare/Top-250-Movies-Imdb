import { Movie } from '@/types'
import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import MoviewMore from './Partials/MoviewMore'


const ShowCaseImageVideoWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
margin: 1rem 0;
gap:10px;
@media (max-width: 768px) {
	flex-direction: column;
}

`
const MovieImage = styled.img`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
max-width: 100%;
height: 100%;
object-fit: cover;
max-width: 250px;

`

const MovieVideo = styled.div`

`


export default function ShowCaseImageVideo({ movie }: { movie: Movie }) {
	return (
		<ShowCaseImageVideoWrapper>
			{/* small placeholder image */}
			<MovieImage src={movie.image} />
			<MovieVideo >
				<ReactPlayer url={movie.trailer} width={500}
					height={380} controls={true}
				/>
			</MovieVideo>
			<MoviewMore />
		</ShowCaseImageVideoWrapper>
	)
}
