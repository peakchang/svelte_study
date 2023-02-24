<script>
    import { onDestroy } from "svelte";
    import { count, name } from "./store";
    console.log(count);

    

    // let number;
    // let userName;
    // const unsubscribeCount = count.subscribe((c) => {
    //     number = c;
    // });

    // const unsubscribeCount2 = count.subscribe((c) => {
    //     number = c;
    // });

    // count.subscribe(() => {});

    // name.subscribe((n) => {
    //     userName = n;
    // });

    const increase = () => {
        // count.update((c) => c + 1);
        $count += 1;
    };

    const changeName = () => {
        // name.update(() => "Neo");
        // name.set("Neo");
        $name = "Neo";
    };

    // onDestroy(() => {
    //     unsubscribeCount();
    //     unsubscribeCount2();
    // });
</script>

<button on:click={increase} on:click={changeName}>Click me!</button>

<!-- <h2>{number}</h2>
<h2>{userName}</h2> -->

<h2>{$count}</h2>
<h2>{$name}</h2>