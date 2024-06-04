<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<table class="md:border-spacing-4">
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
		{#each data.lists as list}
			<tr class={list.state === "done" ? "bg-green-500" : "bg-red-500"}>
				<td>{list.seq}</td>
				<td>{list.market}</td>
				<td>{list.side}</td>
				<td>{list.state}</td>
				<td>{list.price}</td>
				<td>{list.volume}</td>
				<td>{list.price * list.volume * 0.0001}</td>
				<td>{list.price * list.volume}</td>
				<td>{list.createdAt}</td>
				<td>{list.updatedAt}</td>
			</tr>
		{/each}
	</tbody>
</table>
