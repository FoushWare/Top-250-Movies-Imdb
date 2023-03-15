import { SideBarMainHeading } from '@/styles/SharedStyles';
import React from 'react'
import styled from 'styled-components';

const SeenSidebarStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 16px 0 20px;
	`;

const CurrentStatus = styled.div`
	font-size: 1.1rem;
	font-weight: 500;
	margin: 0 0 16px;
	font-color: #333333;
	`;
const MyStatus = styled.span`
	font-size: 1.1rem;
	font-weight: 700;
	margin: 0 0 16px;
	font-color: #333333;
	`;

// hide seen is label for the checkbox
const HideSeen = styled.label`
	margin: 0 0 16px;
	font-color: #333333;
	font-size: 1rem;
	font-weight: 400;
	`;
const InputSeen = styled.input.attrs({ type: 'checkbox' })`
	margin-right: 8px;
	font-size: 1rem;
	font-weight: 500;
	`;
const ThinHr = styled.hr`
	border: 1px solid #999999;
	width: 100%;
	margin: 0 auto;
	`;







export default function SeenSidebar() {
	return (
		<SeenSidebarStyle>
			<SideBarMainHeading>You Have Seen </SideBarMainHeading>
			<CurrentStatus> <MyStatus>0</MyStatus>/<span>250</span> (0%) </CurrentStatus>
			{/* hideseen is label and checkbox */}
			<HideSeen>
				<InputSeen />
				<span>Hide Seen</span>
			</HideSeen>

			<ThinHr />


		</SeenSidebarStyle>

	)
}
