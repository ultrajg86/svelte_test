<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function sayHello() {
        console.log("asdfasdfasdfsadf");
        dispatch("message", {
            text: "Hello!",
        });
    }
</script>

<button on:click={sayHello}>Click to say Hello</button>
