<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	async function getRandomNumber() {
		const res = await fetch(`/api/random-number`);
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}

	let promise = Promise.resolve(data.randomNumber);

	function getNewRandomNumber() {
		promise = getRandomNumber();
	}
</script>

{#await promise}
	<p>...loading</p>
{:then number}
	<p>The random number is {number}</p>
	<p><button on:click={getNewRandomNumber}>Random</button></p>
{/await}
