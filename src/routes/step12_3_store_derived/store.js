import { writable, derived } from "svelte/store";

export let count = writable(1);

// export let double = derived(count, (c) => {
//     return c * 2;
// });

export let double = derived(count, $count => $count * 2);
// export let total = derived([count, double], ([$count,$double]) => {
//     return $count + $double;
// })

// export let total = derived([count, double], ([$count,$double]) => $count + $double);

export let total = derived([count, double], ([$count,$double], set) => {
    console.log('total 구독자가 1명 이상일때!');
    set($count + $double);
    return () => {
        console.log('total 구독자가 0명일때....');
    }
})

export let initialValue = derived(count, ($count, set) => {
    setTimeout(() => {
        set($count + 1)
    },1000)
}, '최초 계산중....')