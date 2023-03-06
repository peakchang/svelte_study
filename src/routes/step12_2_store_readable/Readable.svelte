<script>
    import { user } from "./store";

    console.log(user);
    console.log($user);
    const readUser = () => {
        console.log($user);
    }
</script>

<button on:click={readUser}>Click</button>

<h2>{$user.name}</h2>
