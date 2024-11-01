interface MathFunc{
    (x:number, y:number): number;
}

const sum: MathFunc = (x:number, y:number): number => {
    return x +y;
};

const sub:MathFunc = (x:number, y:number): number => {
    return x - y;
}
   

const value = sum(3, 5);

const log = (message: string):void => {
    console.log(message);
};

