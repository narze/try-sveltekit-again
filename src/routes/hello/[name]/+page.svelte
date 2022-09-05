<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>/hello/[name] -> /hello/[name]/+page.svelte</h1>
<p>Hello {data.name}!</p>
