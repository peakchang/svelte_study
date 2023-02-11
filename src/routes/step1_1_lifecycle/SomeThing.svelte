<script>
    import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
    // onMount, onDestroy 는 부모 파일에서 불려지는 컴포넌트 파일의 라이프사이클이 기준이다.

    let name = 'Something';
    let h1;

    const moreDot = () => {
        name += '.';
    };

    // 반응성을 가지는 데이터는 무한루프에 빠질수 있기 때문에 beforeUpdate 나 afterUpdate에 넣지 않는것이 좋다.
    beforeUpdate(() => {
        console.log('Before update!!');
        console.log(h1 && h1.innerText);
    });

    afterUpdate(() => {
        console.log('After Update!!');
        console.log(h1 && h1.innerText);
    });
    onMount(() => {
        // 컴포넌트가 화면에서 불려진 이후에 실행된다.
        console.log("Mounted!!!");

        h1 = document.querySelector('h1');

        // return () => {
        //     console.log('Destroy in mount!!');
        // }
    });

    onDestroy(() => {
        // 컴포넌트가 화면에서 사라지기 전에 처리해야할 일이 있다면 실행된다.
        console.log("Before Destoy!!!");
    });
</script>

<h1 on:click={moreDot}>{name}</h1>
