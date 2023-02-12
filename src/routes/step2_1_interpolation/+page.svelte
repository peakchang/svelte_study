<script>
    let href = 'https://heropy.blog';
    let name = 'Heropy';
    let value = 'New input value!';
    let isUpperCase = false;

</script>

<!-- <a href="https://heropy.blog">Heropy</a> -->
<a {href}>{name}</a>

<!-- <input type="text" value="Default value.."> -->
<input {value} on:input={e => value = e.target.value} />
<input bind:value />

<div>{isUpperCase ? 'DIV' : 'div'}</div>