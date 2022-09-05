import type { Handle } from '@sveltejs/kit';
import { dev } from '$app/environment';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/custom')) {
		return new Response(JSON.stringify({ message: 'custom response from hooks.ts', dev }));
	}

	const response = await resolve(event);
	return response;
};
