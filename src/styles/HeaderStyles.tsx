/** @format */

"use client";
import styled from "styled-components";
// menu icon from react icons
import { MdMenu } from "react-icons/md";

const StyledHeader = styled.div`
	background-color: #000;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 0 20px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	gap: 10px;
`;

// logo add src and alt
const Logo = styled.img.attrs({
	src: "/imdb.svg",
	alt: "imdb logo",
})`
	width: 100px;
	height: 30px;
	display: flex;
	flex: 1;
	order: 1;
	@media (max-width: 768px) {
		order: 2;
	}
	:hover {
		cursor: pointer;
	}
`;

const NavbarDrawer = styled.div`
	display: flex;
	align-items: center;
	order: 2;
	@media (max-width: 768px) {
		order: 1;
	}
`;

const NavbarDrawerText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 10px;
	color: #fff;
	order: 2;

	@media (max-width: 768px) {
		display: none;
	}
`;

const NavbarDrawerMenu = styled(MdMenu)`
	width: 30px;
	height: 30px;
	color: #fff;
	display: flex;
	order: 1;
	@media (max-width: 768px) {
		order: 1;
	}
`;

const SearchBar = styled.input.attrs({
	type: "search",
	placeholder: "Search Imdb ",
})`
	outline: none;
	width: 300px;
	height: 30px;
	border-radius: 5px;
	border: none;
	padding: 0 10px;
	display: flex;
	flex: 3;
	order: 3;
	position: relative;
	background-image: url(/search.svg);
	background-position: right;
	background-size: contain;
	background-repeat: no-repeat;
	@media (max-width: 768px) {
		order: 3;
		// different search bar for mobile
		width: 200px;
		background-color: #000;
		color: #fff;
	}
`;

const WishlistWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	order: 4;
	@media (max-width: 768px) {
		display: none;
	}
`;

const WishlistIcon = styled.img.attrs({
	// wishlist svg from the public folder
	src: "/wishlist.svg",
	alt: "imdb logo",
})`
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const WishlistText = styled.div`
	color: #fff;
	margin-left: 10px;
`;

const SignIn = styled.div`
	height: 30px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 10px;
	order: 5;
	@media (max-width: 768px) {
		order: 4;
	}
`;

const LanguageSelect = styled.select`
	height: 30px;
	color: #fff;
	background-color: #000;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 10px;
	order: 6;
	@media (max-width: 768px) {
		order: 5;
	}
`;
export default StyledHeader;

export {
	StyledHeader,
	NavbarDrawer,
	NavbarDrawerText,
	NavbarDrawerMenu,
	SearchBar,
	WishlistWrapper,
	WishlistIcon,
	WishlistText,
	SignIn,
	LanguageSelect,
	Logo,
};
