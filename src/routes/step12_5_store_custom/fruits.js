import { Writable, readable, derived, writable } from "svelte/store";

const _fruits = writable([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
]);

// ... 의 이름은 전개 연산자 // {} 안에 변수명을 일치 시켜서 바로 쓰는건 구조분해
export let fruits = {
    ..._fruits,
    getList: () => { },
    setItem: () => { }
}