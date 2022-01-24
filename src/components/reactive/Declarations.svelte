<script>
    let count = 1;

    // the `$:` means 're-run whenever these values change'
    // $:은 값이 변할때마다 해당 값도 변함
    $: doubled = count * 2;
    $: quadrupled = doubled * 2;

    function handleClick(){
        count += 1;
    }
</script>

<button on:click={handleClick}>
    Count: {count}
</button>

<p>{count} * 2 = {doubled}</p>
<p>{doubled} * 2 = {quadrupled}</p>