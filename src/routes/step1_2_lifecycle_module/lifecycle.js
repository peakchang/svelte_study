import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
import { writable } from "svelte/store";

export const lifecycle = () => {
    onMount(() => {
        console.log('Mounted!!');
    })

    onDestroy(() => {
        console.log('Before Destroy!');
    })

    beforeUpdate(() => {
        console.log('Before Update!');
    })

    afterUpdate(() => {
        console.log('After Update!');
    })
}

export const delayRender = (delay=3000) => {
    let render = writable(false);
    onMount(() => {
        console.log('set Mounted~~~~~');
        setTimeout(() => {
            console.log('set Mounted~~~~~222222');
            render.set(true)
        }, delay)
    })
    return render
}