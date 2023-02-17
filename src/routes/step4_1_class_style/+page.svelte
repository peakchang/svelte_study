<script>
    let active = false;
    let color = {
        t: 'tomato',
        w: '#FFF'
    }

    let letterSpacing = 'letter-spacing: 5px;';
</script>

<button on:click={() => {active = !active}}>Toggle</button>

<!-- <div class={active ? 'hello' : ''}> -->
<div class:hello={active}>
    Hello
</div>

<h2 style="background-color:{color.t}; color:{color.w}; {letterSpacing}">
    Heropy!
</h2>

<style>
    div{
        width: 120px;
        height: 200px;
        background: royalblue;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 20px;
        transition: .4s;
    }

    .hello{
        width:250px;
        background: tomato;
    }
</style>