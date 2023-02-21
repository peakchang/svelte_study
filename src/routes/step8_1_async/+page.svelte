<script>
    // const a = () => {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             console.log("a");
    //             resolve();
    //         }, 1000);
    //     });
    // };

    // const b = () => {
    //     return new Promise((res) => {
    //         setTimeout(() => {
    //             console.log("b");
    //             res();
    //         }, 1000);
    //     });
    // };

    // // a()
    // //     .then((res,rej) => b())
    // //     .then((res,rej) => console.log('kldjfljsdf'))

    // const testFunc = async () => {
    //     await a();
    //     await b();
    //     console.log('lisdjflijsdf');
    // }

    // testFunc();

    let isError = false;

    const a = () => {
        // 대기(pending) : '이행'하거나 '거부'되지 않은 초기 상태.
        return new Promise((resolve, reject) => {
            if (isError) {
                reject(new Error("Sorry...."));
                return;
            }
            setTimeout(() => {
                console.log("a");
                // 이행(fulfilled) : 연산이 성공적으로 완료됨.
                resolve("Heropy");
            }, 1000);
        });
    };

    // 대기(pending) : '이행'하거나 '거부'되지 않은 초기 상태.
    // 이행(fulfilled) : 연산이 성공적으로 완료됨.
    // 거부(rejected) : 연산이 실패함

    a()
        .then((res) => {
            console.log(res);
            console.log("b");
        })
        .catch((err) => {
            // 거부(rejected) : 연산이 실패함
            console.log(err);
        })
        .finally(() => {
            console.log("Done!!!");
        });
    // const asyncFn = async () => {
    //     try {
    //         const res = await a();
    //         console.log(res);
    //         console.log("b");
    //     } catch (error) {
    //         console.log(error.message);
    //     } finally {
    //         console.log('Done!!!');
    //     }
    // };
    // asyncFn();
</script>
