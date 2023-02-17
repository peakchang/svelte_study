<script>
    let count = 0;

    const plusCount = () => {
        setInterval(() => {
            count += 1;
        },1000)
    }

    plusCount();
</script>

<h1>{count}</h1>