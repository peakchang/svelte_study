<script>
    let count = 0;

    // 선언
    $: double = count * 2;

    // 블록
    $: {
        console.log(count);
        console.log(double);
    }

    // 함수 실행 (앞에 변수가 변경되면 뒤의 함수를 실행한다.)
    $: count, log()

    // 즉시 실행 함수 (IIFE)
    $: count, (() => {
        console.log('life: Herepy');
    })();

    // 조건문
    $: if(count > 0){
        console.log('if:',double);
    }

    // 반복문 (for)
    $: for (let i = 0; i < 3; i++) {
        count
        console.log('for:',i);
    }

    // 조건문 (Switch)
    $: switch(count){
        case 1:
            console.log('switch: 1');
            break
        default:
            console.log('switch: default');
    }

    // 유효범위 뎁스와는 상관 없에 반응성 구문 내에 반응성이 일어나는 변수가 있으면 사용이 가능하다.
    $:{
        function scope1() {
            console.log('scope1');
            function scope2() {
                console.log('scope2');
                function scope3(){
                    console.log('scope3', count);
                }
                scope3()
            }
            scope2()
        }
        scope1()
    }


    const log = () => {
        console.log('fn: Heropy!');
    }

    const assign = () => {
        count += 1;
    }
</script>

<button on:click={assign}>Assign!</button>