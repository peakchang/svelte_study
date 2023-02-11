<script>
    import SomeThing from "./SomeThing.svelte";
    let toggle = false;
</script>

<button on:click={() => {toggle = !toggle}}>
    Toggle
</button>

{#if toggle}
<SomeThing />
{/if}