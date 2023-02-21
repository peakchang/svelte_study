<script context="module">
    const players = new Set();
    // new Set() 은 유사배열의 형태를 나타낸다.
    export function stopAll() {
        players.forEach((p) => p.pause());
    }
</script>

<script>
    import { onMount } from "svelte";

    export let src;

    let player;

    onMount(() => {
        players.add(player);
    });
</script>

<div>
    <audio bind:this={player} {src} controls>
        <track kind="captions" />
    </audio>
</div>
