/** @format */

import {
	StyledHeader,
	NavbarDrawer,
	NavbarDrawerMenu,
	NavbarDrawerText,
	WishlistWrapper,
	WishlistIcon,
	WishlistText,
	SignIn,
	LanguageSelect,
	Logo,
	SearchBar,
} from "@/styles/HeaderStyles";
const Header = () => {
	return (
		<StyledHeader>
			<Logo />
			<NavbarDrawer>
				<NavbarDrawerMenu />
				<NavbarDrawerText>Menu</NavbarDrawerText>
			</NavbarDrawer>

			<SearchBar />
			<WishlistWrapper>
				<WishlistIcon />
				<WishlistText>Wishlist</WishlistText>
			</WishlistWrapper>

			<SignIn> Sign In</SignIn>
			{/* langauge select with options */}
			<LanguageSelect>
				<option value='en'>EN</option>
				<option value='fr'>FR</option>
				<option value='de'>DE</option>
				<option value='es'>ES</option>
				<option value='it'>IT</option>
				<option value='pt'>PT</option>
				<option value='ru'>RU</option>
			</LanguageSelect>
		</StyledHeader>
	);
};
export default Header;
