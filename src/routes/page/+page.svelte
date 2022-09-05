<script lang="ts">
	import { page, updated } from '$app/stores';
</script>

<pre>{JSON.stringify({ page: $page, updated: $updated }, null, 2)}</pre>
