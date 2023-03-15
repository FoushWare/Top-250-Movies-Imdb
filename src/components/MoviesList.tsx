import { Movie } from '@/types';
import { useMovies } from '@/Hooks/Movies/useMovies/useMovies';
import React, { useState } from 'react'
import styled from 'styled-components';
import MovieCard from './MovieCard';



const PageWrapper = styled.div`
		background-color: #C7C7C3;
		width: 100%;
		height: 100%;
		`;
const PageContent = styled.div`
		background:#fff;
		width: 90%;
		height: 100vh;
		margin: 0 auto;
		display: flex;
		`;

const MoviesColumnStyle = styled.div`
		background: green;
		flex: 3;
		`;

const UserSeenColumnsStyle = styled.div`
		display: flex;
		flex: 1;
		background: #F0F0F0;
		border-left: 3px solid #999999;
		flex-direction: column;
		`;

const UserFollowUpSeenCount = styled.div`
		background: #F0F0F0;
		display: flex;
		flex-direction: column;
		jsutify-content: center;
		padding: 0px 19px;
		gap: 10px;
		`;

const HideTitleHaveSeenCheckBox = styled.input.attrs({
	type: "checkbox",
	name: "hideTitleIHaveSeen",
	id: "hideTitleIHaveSeen",
})`
		margin-right: 10px;
		`;

const SeenHeading = styled.h3`
		font-size: 18px;
    font-weight: normal;
		padding: 20px 0;
		`;

const CurrentCountStyle = styled.span`
		font-size: 25px;
		font-weight: bold;
		`;
const TotalCountStyle = styled.span`
		font-size: 20px;
		font-weight: bold;
		`;
const HorizontalLine = styled.hr`
		border: 1px solid ##F0F0F0;
		margin: 4px 20px;
		`;







const MoviesList = () => {
	const [moviesCount, setMoviesCount] = useState(25);

	const { data, isLoading, isFetching } = useMovies(moviesCount);

	// if (isLoading) return <p>Loading...</p>
	// if (isFetching) return <p>Fetching...</p>
















	return (
		<PageWrapper>
			<PageContent >
				<MoviesColumnStyle >2</MoviesColumnStyle >
				<UserSeenColumnsStyle>
					<UserFollowUpSeenCount>
						<SeenHeading> You Have Seen</SeenHeading>
						<p>
							<CurrentCountStyle>0</CurrentCountStyle>
							/ <TotalCountStyle>250</TotalCountStyle> (0%)
						</p>
						{/* hide title i have seen checkbox */}
						<label htmlFor="hideTitleIHaveSeen">
							<HideTitleHaveSeenCheckBox />
							Hide titles I have seen
						</label>


					</UserFollowUpSeenCount>
					<HorizontalLine />



				</UserSeenColumnsStyle >
			</PageContent>
		</PageWrapper>

	)
}
export default MoviesList