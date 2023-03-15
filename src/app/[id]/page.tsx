import Header from '@/components/Shared/Header'
import React from 'react'
import DetailedMovie from '@/components/DetailView/DetailedMovie';

export default function page({ params, searchParams }) {

	const { id } = params;
	return (
		<>
			<Header />
			<DetailedMovie id={id} />
		</>
	)
}
