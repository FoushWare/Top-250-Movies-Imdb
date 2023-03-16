import React from 'react'
import styled from 'styled-components'
import MoviewMore from './Partials/MoviewMore'


const ShowCaseImageVideoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	margin-bottom: 1rem;
	margin-top: 2rem;
`
const MovieImage = styled.img`
display: flex;
	width: 10rem;
	height: 10rem;
	background: url('https://images.unsplash.com/photo-1542734047-7f7b0f5f5f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80') no-repeat center;
	background-size: contain;
	flex: 1;
`

const MovieVideo = styled.div`
display: flex;
	width: 50rem;
	height: 30rem;
	background: url('/movie-video.jpg') no-repeat center;
	background-size: contain;
	flex: 2;
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
