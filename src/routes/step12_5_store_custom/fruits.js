import { readable, derived, writable, get } from "svelte/store";

const _fruits = writable([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
]);

// ... 의 이름은 전개 연산자 // {} 안에 변수명을 일치 시켜서 바로 쓰는건 구조분해
export let fruits = {
    ..._fruits,
    // getList: () => {
    //     // svelte 의 get 함수는 writable 의 subscribe 와 같은 역할을 한다.
    //     // map : 배열 내의 요소들을 반복시킴 , 뒤 익명함수의 인자로 각각의 요소가 들어간다. return 되는 값은 {} 나 () 가 없어야 한다.
    //     return get(_fruits).map((f) => f.name)
    // },
    getList : () => get(_fruits).map((f) => f.name),
    setItem: (name) => {
        console.log('sdjflisjdlijdsf');
        if(!name){
            alert('값이 없습니다.')
            return
        }
        // $f 는 _fruits의 데이터 전체를 나타내며, 쓰기 가능한 배열을 의미함
        // writable 의 update 에서 값을 변경 후 적용 하려면 return 되는 값에 한번 넣어줘야 한다.
        _fruits.update(($f) => {
            $f.push({
                id : $f.length + 1,
                name
            })
            return $f
        })
    }
}