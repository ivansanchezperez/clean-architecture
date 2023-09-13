type Route = {
	relativePath: string;
	absolutePath: string;
};

export type BreadCrumbRoute = {
	id: number;
	path: string;
	breadcrumb: string;
};

// eslint-disable-next-line no-unused-vars
const createRouting = <T>(route: { [K in keyof T]: Route }): { [K in keyof T]: Route } => route;

const routing = createRouting({
	root: {
		relativePath: '/',
		absolutePath: '/'
	},
	dashboard: {
		relativePath: 'dashboard',
		absolutePath: '/dashboard'
	}
});

export const breadcrumbsRouting: BreadCrumbRoute[] = [
	{ id: 0, path: '/dashboard', breadcrumb: 'breadcrumbs.dashboard.title' }
];

export const getRelativePath = (name: keyof typeof routing): string => {
	return routing[name].relativePath;
};

export const getAbsolutePath = (name: keyof typeof routing): string => {
	return routing[name].absolutePath;
};
