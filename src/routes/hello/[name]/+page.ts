import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }: { params: { name?: string } }) => {
	return {
		name: params['name'] || 'World!'
	};
};
