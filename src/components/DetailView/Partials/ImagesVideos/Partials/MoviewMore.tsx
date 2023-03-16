import React from 'react'
import styled from 'styled-components';

const MoviewMoreWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
`;
const MovieExtraVideos = styled.div`
	min-height: 3rem;
	background: #313131;
	display: flex;
	flex-direction: column;
`;
const MovieExtraImages = styled.div`
	min-height: 3rem;
	background: #313131;
	display: flex;
	flex-direction: column;
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

			<MovieExtraVideos >
				<VideoSVG />
				<Text> 5 Videos</Text>
			</MovieExtraVideos>

			<MovieExtraImages />
			<ImageSVG />
			<Text> 99 Images</Text>
			<MovieExtraImages />

		</MoviewMoreWrapper>
	)
}
