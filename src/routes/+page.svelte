<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import TableRow from '../components/TableRow.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<table class="border-collapse w-full border-spacing-x-24">
	<thead>
		<tr>
			<th>Seq</th>
			<th>Market</th>
			<th>Side</th>
			<th>State</th>
			<th>Price</th>
			<th>Volume</th>
			<th>Fee</th>
			<th>Total</th>
			<th>Created At</th>
			<th>Updated At</th>
		</tr>
	</thead>
	<tbody>
		{#await data.lists}
			<tr>
				<td colspan="10">Loading....</td>
			</tr>
		{:then lists}
			{#each lists as list (list.seq)}
				<TableRow {list} />
			{/each}
		{:catch error}
			<tr>
				<td colspan="10">error loading : {error.message}</td>
			</tr>
		{/await}
	</tbody>
</table>
