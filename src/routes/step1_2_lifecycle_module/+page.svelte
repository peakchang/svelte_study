<script>
    import { lifecycle, delayRender } from "./lifecycle";
    import SomeThing from "./SomeThing.svelte";

    let done = delayRender();
    lifecycle();
</script>

{#if $done}
    <h1>Hello Lifecycle!!</h1>
{/if}


<SomeThing />