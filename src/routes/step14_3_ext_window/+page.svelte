<script>
    import { browser } from "$app/environment";
    import { greet } from "./test";
    import { onMount } from "svelte";
    // let key = "";

    // window.addEventListener("keydown", (event) => {
    //     key = event.key;
    // });
    // console.log(window);
    let getwin;
    let key = "";
    let innerWidth;
    let innerHeight;
    let outerWidth;
    let outerHeight;
    let online;
    // 여기까지는 읽기 전용
    let scrollX;
    let scrollY;
    // 화면이 변경될수 있음

    onMount(() => {
        // getwin = greet(); // 👍️
        // getwin.addEventListener("keydown", (event) => {
        //     console.log("sdlifjliajsdf");
        //     key = event.key;
        // });
    });
</script>

<svelte:window
    on:keydown={(e) => (key = e.key)}
    bind:innerWidth
    bind:innerHeight
    bind:outerWidth
    bind:outerHeight
    bind:online
    bind:scrollX
    bind:scrollY
/>
<h1>{key}</h1>
<div>innerWidth : {innerWidth}</div>
<div>innerHeight : {innerHeight}</div>
<div>outerWidth : {outerWidth}</div>
<div>outerHeight : {outerHeight}</div>
<div>online : {online}</div>
<input type="number" bind:value={scrollX} />
<input type="number" bind:value={scrollY} />
<div class="for-scroll" />

<style>
    .for-scroll {
        height: 2000px;
    }
</style>
