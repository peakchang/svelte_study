<script>
    import TextField from "./TextField.svelte";

    let id = "";
    let pw = "";
</script>

<TextField bind:value={id} type="email" placeholder="ID!"/>
<TextField bind:value={pw} type="password" />