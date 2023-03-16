import Header from '@/components/Shared/Header'
import React from 'react'
import DetailedMovie from '@/components/DetailView/DetailedMovie';

const page = async ({ params, searchParams }: {
	params?: {
		id?: string;
	};
	searchParams?: {
		search?: string;
	};
}) => {

	const id = params?.id;
	return <DetailedMovie id={id} />

}

export default page;
