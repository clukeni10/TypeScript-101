let idade: number = 5;
const nome: string = "nome";
const valida: boolean = false;
let sla: any = false;

sla= "5";
sla="nome";


const ids:number[]  = [1,2,3,4,5];
const boole: boolean[] = [true,false,false,false,false,false,false,false,false];


//tupla
const person: [number,string]= [  10, "10"];

//lisata de tupla

const people: [number,string] []= [
[  10, "10"],
[  10, "10"],
[  10, "10"],
];

//Intersections

const productId: string | number = "product";

//Enum
enum Direction{
    up=1,
    down=2,
    left = "esquerda",
    right = "direita",
}

//Type Assertions

const productName: any = "boné";

// let product = productName as string;
let product = <string>productName;

const direction = Direction.up;
console.log(idade);