import { SideBarMainHeading, ThinHr } from '@/styles/SharedStyles';
import React from 'react'
import styled from 'styled-components';

const SharedStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px 21px 24px 20px;
	`;

const MainHeading = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
	margin: 0 0 16px;
	font-color: #333333;
	`;
const SmallDescription = styled.div`
	    font-size: 11px;
    color: #666;
    margin: 3px 0 10px;
    font-family: Verdana, Arial, sans-serif;
    font-weight: normal;
	`;
const ShareContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	`;
const ShareButton = styled.button`
	background-color: #fff;
		border: 1px solid #999;
		border-radius: 4px;
		color: #333;
		cursor: pointer;
		display: inline-block;
		font-size: 11px;
		font-weight: 700;
		line-height: 1.2;
		margin: 0;
		padding: 4px 8px;
		text-align: center;
		text-decoration: none;
		vertical-align: baseline;
		white-space: nowrap;
		&:hover {
			background-color: #e6e6e6;
			border-color: #adadad;
			color: #000;
			text-decoration: none;

		}

	`;


export default function Share() {
	return (
		<SharedStyles>
			<SideBarMainHeading>You Have Seen </SideBarMainHeading>
			<ShareContainer>
				<MainHeading>IMDb Top 250 Movies</MainHeading>
				<ShareButton>
					Share
				</ShareButton>
			</ShareContainer>
			<SmallDescription>IMDb Top 250 as rated by regular IMDb voters.  </SmallDescription>
			<ThinHr />
		</SharedStyles>

	)
}
