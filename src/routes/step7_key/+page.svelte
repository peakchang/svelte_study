<script>
    // let fruits = ['Apple', 'Banana', 'Cherry', 'Apple', 'Orange']

    import Count from "./Count.svelte";

    let fruits = [
        { id: "1", name: "Apple" },
        { id: "2", name: "Banana" },
        { id: "3", name: "Cherry" },
        { id: "4", name: "Apple" },
        { id: "5", name: "Orange" },
    ];

    let todos = [];
    let fruits2D = [
        [1, "Apple"],
        [2, "Banana"],
        [3, "Cherry"],
        [4, "Apple"],
        [5, "Orange"],
    ];

    let user = {
        name: "Heropy",
        age: 85,
        email: "changdfkf@gmail.com",
    };

    const deleteFirst = () => {
        fruits = fruits.slice(1);
    };

    let reset = false;
</script>

<button on:click={() => (reset = !reset)}> reset!!! </button>

{#key reset}
    <Count />
{/key}

<button on:click={deleteFirst}>Del Fruits!</button>
<ul>
    {#each fruits as fruit (fruit.id)}
        <li>{fruit.name}</li>
    {/each}
</ul>

<section>
    <h2>기본</h2>

    <ul>
        {#each fruits as fruit}
            <li>{fruit.name}</li>
        {/each}
    </ul>
</section>

<section>
    <h2>순서(idx)</h2>

    <ul>
        {#each fruits as fruit, idx}
            <li>{idx} / {fruit.name}</li>
        {/each}
    </ul>
</section>

<section>
    <h2>아이템 고유화</h2>

    <ul>
        {#each fruits as fruit, idx (fruit.id)}
            <li>{idx} / {fruit.name}</li>
        {/each}
    </ul>
</section>

<section>
    <h2>빈 배열 처리</h2>

    <ul>
        {#each todos as todo}
            <li>{todo}</li>
        {:else}
            <div>No Has Items!!</div>
        {/each}
    </ul>
</section>

<section>
    <h2>아이템 고유화</h2>

    <ul>
        {#each fruits as { id, name } (id)}
            <li>{name}</li>
        {/each}
    </ul>
</section>

<section>
    <h2>2차원 배열</h2>

    <ul>
        {#each fruits2D as [id, name] (id)}
            <li>{name}</li>
        {/each}
    </ul>
</section>

<section>
    <h2>나머지 연산자(rest)</h2>
    <ul>
        {#each fruits as { id, ...rest } (id)}
            <li>{rest.name}</li>
            <!-- 객체에서 {원하는 값, ...rest} 라고 쓰면 rest 안에는 원하는 값을 제외한 나머지 값들이 들어간다. -->
        {/each}
    </ul>
</section>

<section>
    <h2>객체 데이터</h2>
    {#each Object.entries(user) as [key, value] (key)}
        <div>{key} : {value}</div>
    {/each}
</section>
