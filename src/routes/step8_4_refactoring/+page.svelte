<script>
    import axios from "axios";
    let title = "";
    let promise = Promise.resolve([]);
    const url = "https://www.omdbapi.com/?i=tt3896198&apikey=";

    const searchMovies = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(
                    `https://www.omdbapi.com/?i=tt3896198&apikey=433719ff&s=${title}`
                );
                console.log(res);
                res.data.Search;
                resolve(res.data.Search);
            } catch (err) {
                reject(err);
                console.log(err.message);
            } finally {
            }
        });
    };
</script>

<input type="text" bind:value={title} />
<button
    on:click={() => {
        promise = searchMovies();
    }}>검색!</button
>

{#await promise}
    <p style="color: royalblue">Loading...</p>
{:then movies}
    <ul>
        {#each movies as movie}
            <li>{movie.Title}</li>
        {/each}
    </ul>
{:catch error}
    <p style="color:red">{error.message}</p>
{/await}
