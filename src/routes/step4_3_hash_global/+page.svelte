<script>
    import Fruits from "./Fruits.svelte";

</script>

<h2>App.svelte</h2>
<ul class="fruits">
    <li>Apple</li>
    <li>Banana</li>
    <li>Chrry</li>
</ul>

<Fruits />

<style>
    /* .fruits{
        color:red;
    } */
    :global(.fruits){
        color:red;
    }
</style>