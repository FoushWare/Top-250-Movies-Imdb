import React from 'react'
import styled from 'styled-components';

const MoviewMoreWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

`;
const MovieExtraVideos = styled.div`
background: #414141;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 3rem 6rem;
`;
const MovieExtraImages = styled.div`
background: #414141;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 3rem 6rem;
`;


const VideoSVG = styled.div`
width: 2rem;
height: 2rem;
background: url('/video.svg') no-repeat center;
background-size: contain;
`;

const Text = styled.div`
color: #fff;
font-size: 1.2rem;
font-weight: 500;
didplay: flex;
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
				<Text>5 Videos</Text>
			</MovieExtraVideos>

			<MovieExtraImages>
				<ImageSVG />
				<Text>99+ Extra Images</Text>
			</MovieExtraImages>


		</MoviewMoreWrapper>
	)
}
