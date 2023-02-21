<script context="module">
    // 모듈 컨텍스트는 해당 스크립트(파일)을 전체를 아우르며 최초 한번만 실행된다. (log 확인)
    export let count = 0;
    console.log('Module context!');
</script>

<script>
    // 각각 몇번 클릭했는지가 아닌 전체 클릭수를 구하기!
    export let fruit;
    // let count = 0;
    console.log('Each component init!');
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    on:click={() => {
        count += 1;
        // console.log(count);
    }}
>
    {fruit}({count})
</div>
