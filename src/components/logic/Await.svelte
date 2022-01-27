<script>

    //https://beomy.github.io/tech/browser/cors/
    
    let message = '새로운 시작을 축하드립니다.';
    let promise = getRandomNumber();

    async function getRandomNumber() {
        const res = await fetch('https://api.telegram.org/bot608515721:AAHshpBhXmzolyuEFb5M-vpAllYzdq8h2vI/sendMessage?chat_id=492287225&text='+message);
        const text = await res.text();

        console.log(res);

        if (res.ok) {
            return text;
        } else {
            throw new Error(text);
        }
    }

    function handleClick() {
        promise = getRandomNumber();
    }
</script>

<p>{message}</p>
<input type="text" bind:value={message} />
<button on:click={handleClick}>generate random number</button>

{#await promise}
    <p>...waiting</p>
{:then number}
    <p>The number is {number}</p>
{:catch error}
    <p style="color: red;">{error.message}</p>
{/await}
