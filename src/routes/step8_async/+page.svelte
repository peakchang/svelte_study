<script>
    const a = (cb) => {
        return new Promise((res) => {
            setTimeout(() => {
                console.log("a");
                cb();
            }, 1000);
        });
    };

    const b = (cb) => {
        return new Promise((res) => {
            setTimeout(() => {
                console.log("b");
                cb();
            }, 1000);
        });
    };

    // const c = (cb) => {
    //     setTimeout(() => {
    //         console.log("c");
    //         cb();
    //     }, 1000);
    // };

    // const d = (cb) => {
    //     setTimeout(() => {
    //         console.log("d");
    //         cb();
    //     }, 1000);
    // };

    // a(() => {
    //     b(() => {
    //         c(() =>{
    //             d(() => {
    //                 console.log('fin!!');
    //             })
    //         })
    //     });
    // });

    a()
        .then((res,rej) => b())
    //     .then((res,rej) => c())
    //     .then((res,rej) => d())
    //     .then((res,rej) => console.log('fin'))
</script>
