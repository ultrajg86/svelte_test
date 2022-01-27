<script>
    import Inner from "./Inner.svelte";
    console.log("Outer");
</script>

<Inner on:message />
