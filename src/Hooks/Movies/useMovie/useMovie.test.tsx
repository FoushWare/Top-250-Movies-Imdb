import { fetchMovie } from "./useMovie";

describe('fetchMovie single Movie', () => {
	it('should return a single movie', async () => {
		const id = 'top1';
		const movie = await fetchMovie(id);
		expect(movie).toEqual(expect.any(Object));
	});

	it('movie id should have top plus number in it if not throw error', async () => {
		const id = 1;
		// mock fetch to throw an error
		jest.spyOn(global, 'fetch').mockImplementationOnce(() => {
			throw new Error('Error fetching a single movie');
		});
		expect(fetchMovie(id)).rejects.toThrow('Error fetching a single movie');

	});
	// test for error
	it('should throw an error if there is an error fetching a single movie', async () => {
		// mock fetch to throw an error
		jest.spyOn(global, 'fetch').mockImplementationOnce(() => {
			throw new Error('Error fetching a single movie');
		});
		// test if the error is thrown
		await expect(fetchMovie(1)).rejects.toThrow('Error fetching a single movie');
	});
	// if there is no id passed to fetchMovie 
	it('should throw an error if there is no id passed to fetchMovie', async () => {
		// mock fetch to throw an error
		jest.spyOn(global, 'fetch').mockImplementationOnce(() => {
			throw new Error('Error fetching a single movie');
		});
		// test if the error is thrown ...
		// ignore the ts error because we are testing for an error
		// @ts-ignore
		await expect(fetchMovie()).rejects.toThrow('Error fetching a single movie');
	});

});