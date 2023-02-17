<script>
    loop1:
    for (let i = 1; i < 4; i++) {
        loop2:
        for (let k = 0; k < 4; k++) {
            if (i === 2) {
                break loop1;
            }
            console.log(`${i}-${k}`);
        }
        console.log("---------------");
    }


    heropy: {
        console.log('a');
        break heropy
        console.log('b');
    }

    // Svelte 반응성 구문!
    let count = 0;
    $: {
        console.log(count);
    }
</script>
