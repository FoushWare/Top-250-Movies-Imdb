/** @format */

// mock the
// mock useRouter next/navigation
// mock the router

export const createMockRouter = (options: any) => {
	const router = {
		push: jest.fn(),
		prefetch: jest.fn(),
		pathname: "",
		route: "",
		query: {},
		asPath: "",
		basePath: "",
		events: {
			on: jest.fn(),
			off: jest.fn(),
			emit: jest.fn(),
		},
		isFallback: false,
		isLocaleDomain: false,
		isPreview: false,
		isReady: true,
		isResolvedUrl: false,
		isSsr: false,
		...options,
	};

	return router;
};
