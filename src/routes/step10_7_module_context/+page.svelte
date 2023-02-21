<script>
    import Fruits, { count } from "./Fruits.svelte";
    let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
</script>

<button
    on:click={() => {
        console.log(count);
    }}
>
    Total Count Log!
</button>

{#each fruits as fruit}
    <Fruits {fruit} />
{/each}
