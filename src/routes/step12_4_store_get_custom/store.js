import { writable, readable, derived } from "svelte/store";


// export let count = writable(1);
// export let double = derived(count, ($count) => $count * 2);
// export let user = readable({
//     nema: 'Heropy',
//     age: 85,
//     email: 'sldjfldsjf@lsdjflsdf.com'
// });

const { set, update, subscribe } = writable(0);

export let count = {
    set,
    update,
    subscribe,
    increment : () => update(n => n + 1),
    decrement : () => update(n => n - 1),
    reset : () => set(0)
}