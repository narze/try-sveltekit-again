import type { PageLoad } from '.svelte-kit/types/src/routes/hello/[name]/$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = () => {
	throw redirect(307, '/hello/world');
};
