<script>
    // import { createEventDispatcher } from "svelte";
    // const dispatch = createEventDispatcher();

    import Child from "./Child.svelte";



</script>

<h2>Parent!!</h2>
<!-- <button on:click={(event) => dispatch("click", { event })}>
    Parent click!
</button> -->

<button on:click>Parent click!</button>

<Child on:myEvent />