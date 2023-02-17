<script>
    import { tick } from "svelte";
    let count = 0;
    let double = 0;
    $:{
        // 반응성을 가지는 어떠한 변수가 안에 있고 label 구문 안에 넣으면 반응성에 대한 반응성을 나타낼수 있다.
        double = count * 2;
        console.log('double!!');
    }

    // label 구문 내에는 미리 선언되어 있지 않은 변수를 선언하여 사용할수 있다.
    // $: double = count * 2;
    const assign = async () => {
        count += 1;
        console.time('timer');
        await tick()
        console.timeEnd('timer')
        console.log(double);
    }

    // tick 미적용시 실행되는 순서 count+=1 >> console.log(double) >> $:double = count * 2
    // tick 적용시 실행되는 순서 count+=1  >>  await tick() >> $:double = count * 2 >> console.log(double)
</script>

<button on:click={assign}>Assign!</button>
<h2>{count}</h2>
<h2>{double}</h2>