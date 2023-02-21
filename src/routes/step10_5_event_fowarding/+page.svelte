<script>
    import Parent from "./Parent.svelte";
    const handler = (e) => {
        console.log(e);
        // const e = event.detail.event;
        console.log(e.currentTarget);
    };

    const myEventHandler =(e) => {
        console.log(e.detail.myName);
        console.log(e.currentTarget);
    }

</script>

<Parent on:click={handler} on:myEvent={myEventHandler} />