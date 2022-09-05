import type { PageLoad } from '../../../.svelte-kit/types/src/routes/random-number/$types';

export const load: PageLoad = async ({ url, fetch }) => {
	const res = await fetch(`${url.origin}/api/random-number`);
	const randomNumber = await res.text();

	return {
		randomNumber
	};
};
