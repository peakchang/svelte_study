<script>
    import { get } from "svelte/store";
    // import { count, double, user } from "./store";

    // console.log(get(count));
    // console.log(get(double));
    // console.log(get(user));

    import { count } from "./store";

</script>

<h1>{$count}</h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>