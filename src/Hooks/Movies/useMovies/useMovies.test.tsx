import { fetchMovies } from "./useMovies";

// test fetchMovies function
describe('fetchMovies', () => {
	it('should return an array of movies', async () => {
		const movies = await fetchMovies();
		expect(movies).toEqual(expect.any(Array));
	});
	it('should return an array of movies with a length of 10 when there is no argument passed to it', async () => {
		const movies = await fetchMovies();
		expect(movies.length).toBe(10);
	});
	it('should return an array of movies with a length of 5', async () => {
		const movies = await fetchMovies(5);
		expect(movies.length).toBe(5);
	});
	// test for error
	it('should throw an error if there is an error fetching movies', async () => {
		// mock fetch to throw an error
		jest.spyOn(global, 'fetch').mockImplementationOnce(() => {
			throw new Error('Error fetching movies');
		});
		// test if the error is thrown
		await expect(fetchMovies()).rejects.toThrow('Error fetching movies');
	});



});


