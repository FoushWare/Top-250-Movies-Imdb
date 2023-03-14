'use client';
import Header from "@/components/Header";
import MoviesList from "@/components/MoviesList";

const HomePage = () => {
	return (
		<>
			<Header />
			<MoviesList />
		</>
	);
};
export default HomePage;

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'dc73faa3a5msha27ae0540c3b2b4p15c6c6jsne8cb91d2e3e8',
// 		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
// 	}
// };

// fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));