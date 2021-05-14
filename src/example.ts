function concat(first: string, second: string) {
    return first + second
}

console.log(concat("Hello", " world!"));

type HomeTask = {
    howIDoIt: string
    tripleArray: [string, number] | [string, string, number]
    withData?: Array<HomeTask>
}

const myHomeTask: HomeTask = {
    howIDoIt: "I Do It Wel",
    tripleArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", tripleArray: ["string one", 23] }],
}
console.log(myHomeTask);

interface MyArray<T> {
    length: number

    [n: number]: T

    pop(): T | undefined;

    map<U>(fn: (element: T) => U): U[]

    reduce(fn: (acc: T, element: T) => T): T
    reduce<N>(fn: (acc: N, element: T) => N, initial: N): N
}

const myArr: MyArray<string> = ["a", "b", "c", "d"];

console.log(myArr.map(element => element + 22));

console.log(myArr.reduce((acc, element) => {
    return +acc + +element;
}, 1));

const array: Array<number> = [];