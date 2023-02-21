<script>
    let count = 0;

    const increase = () => {
        count += 1;
    }

    const current = (e) => {
        console.log(e.target);
    }
</script>

<button
on:click={increase}
on:click={current}
on:click={() => console.log('click!!')}
>
    Click me!
</button>

<h1>{count}</h1>