<script>
    // let promise = new Promise((resolve) => resolve("Hmm...."));
    let promise = Promise.resolve('Hmm.....');
    let isError = false;
    const fetchName = () => {
        return new Promise((res, rej) => {
            // if (isError) {
            //     rej(new Error("Sorry..."));
            // }
            setTimeout(() => {
                res("Herepy");
            }, 0);
        });
    };
</script>

<button on:click={async () => (promise = fetchName())}>Fetch Name!</button>

{#await promise then name}

    <!-- 대기(Pending) -->
    <!-- <p>Loding...</p> -->
<!-- {:then name} -->
    <!-- 이행(Fulfilled) -->
    <h1>{name}</h1>
<!-- {:catch error} -->
    <!-- 거부(rejected) -->
    <!-- <h1>{error.message}</h1> -->
{/await}
