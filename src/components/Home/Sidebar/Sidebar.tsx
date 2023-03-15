/** @format */

import React from "react";
import styled from "styled-components";
import SeenSidebar from "./Partials/SeenSidebar";
import TopByGerne from "./Partials/TopByGerne";
import WidgetLinks from "./Partials/WidgetLinks";

const SidebarWrapperStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex: 1;
	background: #f0f0f0;
	padding: 0px 19px;
	border-left: 2px solid #999999;
`;

export default function Sidebar() {
	return (
		<SidebarWrapperStyle>
			<SeenSidebar />
			<WidgetLinks />
			<TopByGerne />
		</SidebarWrapperStyle>
	);
}
