<script>
    import axios from "axios";
    // let apikey = "9d38c939";
    // let apikey = "433719ff";
    let title = "";
    let movies = null;
    let error = null;
    let loading = false;
    const url = "https://www.omdbapi.com/?i=tt3896198&apikey=";

    const searchMovies = async () => {
        if (loading) return;
        movies = null;
        error = null;
        loading = true;
        try {
            const res = await axios.get(
                `https://www.omdbapi.com/?i=tt3896198&apikey=433719ff&s=${title}`
            );
            console.log(res);
            movies = res.data.Search;
        } catch (err) {
            console.log(err.message);
            error = err;
        } finally {
            loading = false;
        }
    };
</script>

<input type="text" bind:value={title} />
<button on:click={searchMovies}>검색!</button>

{#if loading}
    <p style="color: royalblue">Loading...</p>
{:else if movies}
    <ul>
        {#each movies as movie}
            <li>{movie.Title}</li>
        {/each}
    </ul>
{:else if error}
    <p style="color:red">{error.message}</p>
{/if}
