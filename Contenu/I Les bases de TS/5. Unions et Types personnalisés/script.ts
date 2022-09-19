// Unions

let code : string | number | boolean | object | Function;
code = 5;

let arr: (boolean|number)[];

arr = [true,false,50]

const foo = (params: number|string) => {
    console.log(params);
}

foo('Test');

// Types Perso

type mixedNumberStr = number | string;
type booleanOrObject = boolean | object;

const baz = (params: mixedNumberStr | booleanOrObject) => {
    console.log(params);
}

baz(true);

type element = {
    x: number;
    y: number;
    id: number | string;
    visible: boolean;
}

const button : element = {
    x: 99,
    y: 50,
    id: 'first',
    visible: false
}