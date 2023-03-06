<!-- <svelte:options immutable={true} /> -->

<script>
    import { afterUpdate } from "svelte";

    export let name;
    // 기존 fruit === 새로운 fruit
    // 상위에서 지정된 데이터 부분만 변하게 된다.

    let updateCount = 0;
    afterUpdate(() => {
        updateCount += 1;
    });
</script>

<div>{name}({updateCount})</div>
