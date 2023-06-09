import React from 'react'
import styled from 'styled-components'

const AddToWishtListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 1rem;
	flex: 1;
`

const AddToWishtListButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 0.5rem;
	background: #fff;
	color: #000;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:hover {
		background: #000;
		color: #fff;
	}
`

const AddToWishtListIcon = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	background: url('/icons/wishtlist.svg') no-repeat center;
	background-size: contain;
`

const AddToWishtListText = styled.span`
	margin-left: 0.5rem;
	font-size: 1.1rem;
	font-weight: 600;
`



export default function AddToWishtList() {
	return (
		<AddToWishtListWrapper>
			<AddToWishtListButton>
				<AddToWishtListIcon />
				<AddToWishtListText>Add to WishtList</AddToWishtListText>
			</AddToWishtListButton>
		</AddToWishtListWrapper>

	)
}
