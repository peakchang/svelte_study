<script>
    let fruits = [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
        { id: 4, name: "Mango" },
    ];

    const assign = (fruit) => {
        fruit.name += "!";
        fruits = fruits;
    };
</script>

<section>
    {#each fruits as fruit (fruit.id)}
        <div on:click={assign(fruit)}>
            {fruit.name}
        </div>
    {/each}
</section>

<section>
    {#each fruits as fruit (fruit.id)}
        <div on:click={() => (fruit.name += "!")}>
            {fruit.name}
        </div>
    {/each}
</section>

<section>
    {#each fruits as { id, name } (id)}
        <div on:click={() => (name += "!")}>
            {name}
        </div>
    {/each}
</section>
