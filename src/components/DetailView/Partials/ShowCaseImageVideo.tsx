import React from 'react'
import styled from 'styled-components'


const ShowCaseImageVideoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`
const MovieImage = styled.div`
	width: 20rem;
	height: 30rem;
	background: url('/movie-image.jpg') no-repeat center;
	background-size: contain;
`
const MovieVideo = styled.div`
	width: 50rem;
	height: 30rem;
	background: url('/movie-video.jpg') no-repeat center;
	background-size: contain;
`
const MoviewMore = styled.div`
	width: 20rem;
	height: 30rem;
	background: url('/movie-more.jpg') no-repeat center;
	background-size: contain;
`



export default function ShowCaseImageVideo({ movie }: { movie: Movie }) {
	return (
		<ShowCaseImageVideoWrapper>
			<MovieImage />
			<MovieVideo />
			<MoviewMore />
		</ShowCaseImageVideoWrapper>
	)
}
