<script>
    const clickHandler = (event) => {
        // console.log(event.target);
        console.log(event.currentTarget);
    };

    const wheelHandler = (e) => {
        console.log(e);
    };
</script>

<section>
    <h2>preventDefault</h2>

    <a
        href="https://naver.com"
        target="_blank"
        on:click|preventDefault={clickHandler}
        >Naver
    </a>
</section>

<section>
    <h2>Once</h2>

    <a
        href="https://naver.com"
        target="_blank"
        on:click|preventDefault|once={clickHandler}
    >
        Naver
    </a>
</section>

<section>
    <h2>stopPropagation</h2>

    <div class="parent" on:click={clickHandler}>
        <div class="child" on:click|stopPropagation={clickHandler}></div>
    </div>
</section>


<section>
    <div class="parent" on:click|capture={clickHandler}>
        <div class="child" on:click={clickHandler}></div>
    </div>
</section>


<section>
    <h2>self</h2>

    <div class="parent" on:click|self={clickHandler}>
        <div class="child"></div>
    </div>
</section>

<section>
    <h2>passive</h2>
    <div class="parent wheel" on:wheel|passive={wheelHandler}>
        <div class="child"></div>
    </div>
</section>

<style>
    section{
        margin-top: 30px;
    }
    .parent{
        width: 200px;
        height: 200px;
        background-color: royalblue;
        position: relative;
    }
    .child{
        width:120px;
        height:120px;
        background-color: orange;
        position:absolute;
        top: 20px; left: 20px;
    }
</style>