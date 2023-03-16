import Header from '@/components/Shared/Header'
import React from 'react'
import DetailedMovie from '@/components/DetailView/DetailedMovie';

const page = async ({ params, searchParams }) => {

	const { id } = params;
	return <DetailedMovie id={id} />

}

export default page;
