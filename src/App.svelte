<script>
	import Domevents from "./components/events/Domevents.svelte";

	// import Assignments from './components/reactive/Assignments.svelte';
	// import Declarations from './components/reactive/Declarations.svelte';
	// import Statements from './components/reactive/Statements.svelte';
	// import Declaring from "./components/props/Declaring.svelte";
	// import Default from "./components/props/Default.svelte";
	// import Spread from "./components/props/Spread.svelte";

	// const pkg = {
	// 	name: "svelte",
	// 	version: 3,
	// 	speed: 'blazing',
	// 	website: 'https://svelte.dev'
	// };

	// import Ifblocks from "./components/logic/Ifblocks.svelte";
	// import Eachblocks from "./components/logic/Eachblocks.svelte";
	// import Keyed from "./components/logic/Keyed.svelte";
	// import Await from "./components/logic/Await.svelte";

	// import DomeventsTest from "./components/events/Domevents.svelte";
	import Inline from "./components/events/Component-events.svelte";

	import CustomButton from "./components/events/CustomButton.svelte";

	function handleClick(){
		alert("clicked");
	}

	// let promise = postList();
	// async function postList() {
	// 	const res = await fetch("http://127.0.0.1:8000/api/post");
	// 	const text = await res.json();

	// 	console.log(text.data);

	// 	if (res.ok) {
	// 		return text.data;
	// 	} else {
	// 		throw new Error(text);
	// 	}
	// }
</script>

<!-- <Assignments />
<Declarations />
<Statements /> -->
<!-- 
<Declaring answer={11} />
<Default />
<Spread {...pkg} /> -->
<!-- 
<Ifblocks />
<Eachblocks />
<Keyed />
<Await /> -->

<Inline />

<CustomButton on:click={handleClick} />

<!-- 
{#await promise}
	<p style="color: blue;">...waiting</p>
{:then lists}
	<ul>
		{#each lists as list}
			<li>
				{ list.title }
			</li>
		{/each}
	</ul>
{:catch error}
	<p style="color: red;">{error.message}</p>
{/await} -->
