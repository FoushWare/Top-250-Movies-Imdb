import { Movie } from '@/types';
import { useRouter } from 'next/navigation';
import React from 'react'
import styled from 'styled-components';

const MovieCardStyles = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	background: #f0f0f0;
	gap: 8px;
	margin-bottom: 4px;
	:hover {
		cursor: pointer;
	}

`;
const ImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #f0f0f0;
	height: 100%;
`;
const TitleStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex:3;
	background: #f0f0f0;
	color: #5EB5E8;
	:hover {
		cursor: pointer;
		text-decoration: underline;

	}
`;
const RankStyle = styled.div`
	display: flex;
	flex: 1;
	background: #f0f0f0;
	margin-bottom: 10px;
`;
const YourRankStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
	background: #f0f0f0;
	margin-bottom: 10px;
`;
const WishlistStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #f0f0f0;
	margin-bottom: 10px;
`;
const MovieImage = styled.img`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
	width: 50px;
	height: 50px;
`;
const WishlistIcon = styled.img.attrs({
	// wishlist svg from the public folder
	src: "/wishlistblack.svg",
	alt: "imdb logo",
})`
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
`;



export default function MovieCard({ movie }: { movie: Movie }) {

	// use router to navigate to detail page
	const router = useRouter();
	return (
		<MovieCardStyles>
			<ImageWrapper>
				<MovieImage src={movie?.image} alt="Picture of the author" />
			</ImageWrapper>
			<TitleStyle
				onClick={() => {
					// navigate to detail page
					router.push(`/${movie.id}`)

				}}

			> {movie?.rank}-{movie?.title} </TitleStyle>
			<RankStyle>
				{
					movie?.rating && (
						<>
							<span>{movie.rating}</span>
							<span>⭐</span>
						</>
					)
				}

			</RankStyle>
			<YourRankStyle>
				{
					movie?.yourRating && (
						<>
							<span>{movie?.yourRating}</span>
							<span>⭐</span>
						</>
					)
				}


			</YourRankStyle>
			<WishlistStyle>
				{/* widhlist icon */}
				<WishlistIcon />

			</WishlistStyle>
		</MovieCardStyles>

	)
}
