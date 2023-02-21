<script>
    export let value;
    // $$props
    // $$restProps
</script>

<div class="my-custom-input">
    <input bind:value {...$$restProps} />
</div>

<style>
    .my-custom-input input {
        border-radius: 100px;
        padding: 10px 20px;
    }
</style>
