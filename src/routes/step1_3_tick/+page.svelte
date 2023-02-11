<script>
    import { tick } from 'svelte';
    let name = 'world';
    /*
    Svelte는 기본적으로 함수 등 모든 작업이 끝난 뒤에 화면이 바뀐다(렌더링 된다)
    때문에 아래 함수가 모두 실행된 이후 다음코드로 넘어가기 때문에 아래 console.log() 구문은
    맨 처음 할당되었던 Hello world 가 출력이 된다.
    */
    const handler = async () => {
        name = 'pcy';
        await tick() // 만약, 변수를 재할당 하고 그 결과를 출력하고 싶다면 tick 함수를 쓴다 (비동기 구문인걸 유의)
        const h1 = document.querySelector('h1');
        console.log(h1.innerText);
    }
</script>

<h1 on:click={handler}>Hello {name}!</h1>