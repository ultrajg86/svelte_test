<script>
    export let  todos;
    export let  todo;

    let isEdit = false;
    let title = '';

    function onEdit(){
        isEdit = true;
        title = todo.title;
    }

    function updateTodo(){
        todo.title = title;
        offEdit();
    }

    function offEdit(){
        isEdit = false;
    }

    function deleteTodo(){
        todos = todos.filter(t => t.id !== todo.id);
    }

</script>

{#if isEdit}
    <div>
        <input bind:value={title} 
            type="text" 
            on:keydown={(e) => {e.key === 'Enter' && updateTodo()}} />
        <button on:click={updateTodo}>
            Ok
        </button>
        <button on:click={offEdit}>
            Cancel
        </button>
    </div>
{:else}
    <div>
        {todo.title}
        <button on:click={onEdit}>
            Edit
        </button>
        <button on:click={deleteTodo}>
            Delete
        </button>
    </div>
{/if}
