<script>
    import { delayRender } from "./lifecycle";

    let done = delayRender(1000);
</script>

{#if $done}
    <h1>SomeThing!!!</h1>
{/if}
