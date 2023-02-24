import { writable } from "svelte/store";

export let count = writable(0, () => {
    console.log('count 구독자가 1명 이상일때!');
    return () => {
        console.log('count 구독자가 0명일때....');
    }
});



export let name = writable('Heropy', () => {
    console.log('name 구독자가 1명 이상일때!');
    return () => {
        console.log('name 구독자가 0명일때....');
    }
});