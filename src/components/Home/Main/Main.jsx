/** @format */

import React from "react";
import styled from "styled-components";
import Feed from "./Partials/Feed";
import Share from "./Partials/Share";

const MainWrapperStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	flex: 3;
`;

export default function Main() {
	return (
		<MainWrapperStyle>
			<Share />
			<Feed />
		</MainWrapperStyle>
	);
}
