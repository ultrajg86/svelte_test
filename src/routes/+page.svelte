<script context="module">
	async function add() {
		const res = await fetch('/api/trade');
		const posts = await res.json();
		console.log(posts);
	}
</script>

<main class="p-4">
	<h1 class="text-2xl font-bold mb-4">Posts</h1>
	<ul></ul>
</main>

<h1>Welcome to SvelteKit</h1>
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<p>열심히 해보자!!</p>

<h1 class="text-3xl font-bold underline">Hello</h1>

<button on:click={add}>Add</button>

<style>
	/* Additional styles if needed */
</style>
