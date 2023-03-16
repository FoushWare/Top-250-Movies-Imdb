import React from 'react'
import styled from 'styled-components';

const MoviewMoreWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 1rem;
`;
const MovieExtraImagesVideos = styled.div`
	min-height: 8rem;
	background: #313131;
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: center;
		text-transform: uppercase;
		font-size: 0.75rem;
		font-smoothing: antialiased;
		color: #fff;
		gap: 0.5rem;
		letter-spacing: 0.16667em;
		font-family: Roboto,Helvetica,Arial,sans-serif;
`;


const VideoSVG = styled.div`
width: 2rem;
height: 2rem;
background: url('/video.svg') no-repeat center;
background-size: contain;
`;

const Text = styled.div`
`;

const ImageSVG = styled.div`
width: 2rem;
height: 2rem;
background: url('/image.svg') no-repeat center;
background-size: contain;
`;







export default function MoviewMore() {
	return (
		<MoviewMoreWrapper>

			<MovieExtraImagesVideos >
				<VideoSVG />
				<Text>5 Videos</Text>
			</MovieExtraImagesVideos>

			<MovieExtraImagesVideos >
				<ImageSVG />
				<Text>99+ Extra Images</Text>
			</MovieExtraImagesVideos>


		</MoviewMoreWrapper>
	)
}
