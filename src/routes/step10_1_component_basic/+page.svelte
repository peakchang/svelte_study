<script>
    import { onMount } from "svelte";
    import Heropy from "./Heropy.svelte";
    import Footer from "./Footer.svelte";

    let heropy
    
    onMount(() => {
        console.log(heropy);
    })

    
</script>

<Heropy title="Good~" bind:this={heropy} />

<div />
<input type="text" />

<Footer />
