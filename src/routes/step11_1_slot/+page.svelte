<script>
    import Btn from "./Btn.svelte";
    import Card from "./Card.svelte";
</script>

<Btn />

<Btn>Submit!</Btn>

<Btn block>Submit!</Btn>

<Btn color="royalblue">Submit!</Btn>

<Btn block color="red">Submit!</Btn>

<Card>
    <div slot="age">85</div>
    <h2 slot="name">Heropy</h2>
    <div slot="email" let:domain let:hello>
        testtt{domain} / {hello}
    </div>
</Card>
<Card>
    <span slot="email" let:domain>neo{domain}</span>
    <h3 slot="name">zizizi</h3>
</Card>

<style>
    h2 {
        color: red;
    }
</style>
