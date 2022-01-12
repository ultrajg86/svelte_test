<script>
	import Todo from './Todo.svelte';
	let title ='';
	let todos = [];
	let id = 0;

	function createTodo(){
		todos.push({
			id,
			title
		});
		todos = todos;
		title = '';
		id += 1;
	}
</script>

<input bind:value={title} 
		type="text"
		on:keydown={(e) => {e.key === 'Enter' && createTodo()}} />
<button on:click={createTodo}>
	Create Todo
</button>

{#each todos as todo}
	<Todo {todos} {todo} />
{/each}