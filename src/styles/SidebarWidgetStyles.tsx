import styled from "styled-components";

export const SidebarWidgetLink = styled.a`
	font-size: 0.8rem;
	color:#136CB2;
	font-weight: 500;
	margin: 0 0 16px;
	font-color: #333333;
	text-decoration: none;
	font-weight: 400;
	&.selected {
		font-weight: 700;
		border: 1px solid #999999;
		border-radius: 4px;
		border-width: 1px;
		width: 40%;
		padding: 4px;
		background: #fff;
	}
	&:hover {
		text-decoration: underline;
	}

	`;

export const WidgetLinksStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	`;

