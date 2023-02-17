<script>
    let innerHTML = '';
    let textContent = '';
</script>

<div contenteditable bind:innerHTML={innerHTML} bind:textContent={textContent}>
    Hello world!
</div>

<div>{innerHTML}</div>
<div>{textContent}</div>
<div>{@html innerHTML}</div>

