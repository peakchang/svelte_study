<script>
    let text = "";
    let number = 3;
    let checked = false;
    let fruits = ["Apple", "Banana", "Cherry"];
    let selectedFruits = [];
    let group = "Banana";
    let textarea = "";
    let select = "";
    let multipleSelect = ["Banana", "Cherry"];

    const showLog = (e) => {
        console.log(e.target.value);
        console.log(text);
    };
</script>

<section>
    <h2>Text</h2>
    <input type="text" bind:value={text} on:keyup={showLog} />
</section>

<section>
    <h2>Number/Range</h2>
    <div>
        <input type="number" bind:value={number} min="0" max="10" />
    </div>

    <div>
        <input type="range" bind:value={number} min="0" max="10" />
    </div>
</section>

<section>
    <h2>Checkbox</h2>
    <input type="checkbox" bind:checked /> Agree?
    <label>
        <input type="checkbox" bind:checked /> Agree?(label wrapping)
    </label>
</section>

<section>
    <h2>Checkbox 다중선택</h2>
    <strong>
        Selected: {selectedFruits}
    </strong>
    <br />
    {#each fruits as fruit}
        <label>
            <input
                type="checkbox"
                value={fruit}
                bind:group={selectedFruits}
            />{fruit}
        </label>
        <br />
    {/each}
</section>

<section>
    <h2>Radio</h2>

    <strong>Selected : {group}</strong><br />
    <!-- group 을 name 대신 쓸수 있음 -->
    <label>
        <input type="radio" value="Apple" bind:group /> Apple
    </label>
    <br />
    <label>
        <input type="radio" value="Banana" bind:group /> Banana
    </label>
    <br />
    <label>
        <input type="radio" value="Cherry" bind:group /> Cherry
    </label>
</section>

<section>
    <h2>Textarea</h2>
    <pre>{textarea}</pre>
    <textarea bind:value={textarea} />
</section>

<section>
    <h2>Select 단일 선택</h2>
    <strong>Selected : {select}</strong>
    <div>
        <select bind:value={select}>
            <option disabled value="">Choose!!</option>
            <option>Apple</option>
            <option>Banana</option>
            <option>Cherry</option>
        </select>
    </div>
</section>

<section>
    <h2>Select 다중 선택</h2>
    <strong>Selected : {multipleSelect}</strong>
    <div>
        <select multiple bind:value={multipleSelect}>
            <option value="" disabled>Please Select One!!</option>
            <option>Apple</option>
            <option>Banana</option>
            <option>Cherry</option>
        </select>
    </div>
</section>
