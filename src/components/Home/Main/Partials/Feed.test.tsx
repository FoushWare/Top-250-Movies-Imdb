import Feed from "./Feed";
import { useMovies } from "@/Hooks/Movies/useMovies/useMovies";
import { fireEvent, render } from '@testing-library/react'

// testing useMovies hook
// testing isFetching, isLoading, data
//  mock data is being fetched from useMovies hook

jest.mock("../../../../Hooks/Movies/useMovies/useMovies", () => ({
	useMovies: jest.fn()
}));

const mockedUseMovies = useMovies as jest.MockedFunction<typeof useMovies>;

// mock useRouter from next/navigation
jest.mock("next/navigation", () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}));






describe("Feed", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("is loading true test showing LoadingSpinner ", () => {
		// mock the useMovies hook and set isLoading to true
		mockedUseMovies.mockImplementation(
			() => ({
				isLoading: true,
				isFetching: false,
				data: []
			})
		);
		const { getByTestId } = render(<Feed />);
		expect(getByTestId("loader")).toBeTruthy();
	});

	it("is fetching true test showing Fetching...", () => {
		// mock the useMovies hook and set isFetching to true
		mockedUseMovies.mockImplementation(
			() => ({
				isLoading: false,
				isFetching: true,
				data: []
			})
		);
		const { getByTestId } = render(<Feed />);
		expect(getByTestId("isFetching")).toBeTruthy();
	});

	it("is fetching false and data is empty test showing No movies found", () => {
		// mock the useMovies hook and set isFetching to false and data to empty array
		mockedUseMovies.mockImplementation(
			() => ({
				isLoading: false,
				isFetching: false,
				data: []
			})
		);
		const { getByTestId } = render(<Feed />);
		expect(getByTestId("noMoviesFound")).toBeTruthy();
	});

	it("is fetching false and data is not empty test showing MovieCard", () => {
		// mock the useMovies hook and set isFetching to false and data to empty array
		mockedUseMovies.mockImplementation(
			() => ({
				isLoading: false,
				isFetching: false,
				data: [{}, {}]
			})
		);
		// expect component MovieCard to be rendered twice
		const { getAllByTestId } = render(<Feed />);
		expect(getAllByTestId("movieCard")).toHaveLength(2);
	});

	it("is fetching false and data is not empty test showing Load More button", () => {
		// mock the useMovies hook and set isFetching to false and data to empty array
		mockedUseMovies.mockImplementation(
			() => ({
				isLoading: false,
				isFetching: false,
				data: [{}]
			})
		);
		// expect loadMore button to be rendered
		const { getByText } = render(<Feed />);
		expect(getByText("Load More")).toBeTruthy();
	});




























	// test if the load more button is working










	it.todo("should render the component");
});

