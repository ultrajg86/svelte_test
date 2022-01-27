<script>
    import Outer from "./Outer.svelte";
    function handleMessage(event) {
        console.log(event);
        alert(event.detail.text);
    }
</script>

<Outer on:message={handleMessage} />
