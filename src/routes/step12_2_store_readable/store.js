import { readable } from "svelte/store";

const UserData = {
    name: 'Heropy',
    age: 85,
    email: 'tjtidjdk@gmail.com',
    token: 'Ajdsidjfdjsdfj'
}

export let user = readable(UserData, (set) => {
    console.log('user 구독자가 1명 이상일때');
    delete UserData.token;
    set(UserData);
    return () => {
        console.log('user 구독자가 0명일때....');
    }
});