<script>
    import { count, double, total, initialValue } from "./store";

    console.log(double);
</script>

<button on:click={() => ($count += 1)}>Click!</button>

<h2>count : {$count}</h2>
<h2>double : {$double}</h2>
<h2>total : {$total}</h2>
<h2>count + 1 : {$initialValue}</h2>