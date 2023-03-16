import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import MoviewMore from './Partials/MoviewMore'


const ShowCaseImageVideoWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: flex-start;
gap: 1rem;
margin: 1rem 0;
@media (max-width: 768px) {
	flex-direction: column;
}

`
const MovieImage = styled.img.attrs({
	src: 'https://api.lorem.space/image/movie?w=150&h=230',
	alt: 'movie image'
})`
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
			<MovieImage />
			<MovieVideo >
				<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={600}
					height={380} controls={true}
				/>
			</MovieVideo>
			<MoviewMore />
		</ShowCaseImageVideoWrapper>
	)
}
