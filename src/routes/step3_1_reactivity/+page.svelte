<script>
    let name = "pcy";
    let fruits = ['Apple', 'Banana', 'Cherry'];
    let user = {
        name : 'pcy',
        depth : {
            a: 'b',
        },
        numbers : [1,2],
    }

    let numbers = user.numbers;
    let hello = 'world';

    const assign = () => {
        name = 'NEO';
        // fruits.push('Orange'); // 이렇게 해도 변화가 생기지 않는다. Svelte 에서는 할당 연산자(=)을 통해서만 반응성이 일어난다.
        // fruits = fruits;
        fruits = [...fruits, 'Orange'];
        user.name = 'NEO';
        user.depth.a = 'c';
        user.numbers.push(3);

        numbers = numbers;
    };
</script>

<button on:click={assign}>Assign!</button>

<h2>name : {name}</h2>
<h2>fruits : {fruits}</h2>
<h2>user name : {user.name}</h2>
<h2>user depth a: {user.depth.a}</h2>
<h2>user numbers : {user.numbers}</h2>
<h2>numbers : {numbers}</h2>
<h2>hello : {hello}</h2>