//Type

type Order = {
    productID: string;
    price: number
}
type user = {
    firstName: string;
    age:number;
    email?:string;
    password?:string;
    order:Order[];
    register():string;

};

const User: user ={
    firstName:"john",
    age: 20,
    order:[{productID: "1", price:200}],
    register(){
        return "Please"
    },
    
};

User.password
const loga =(message:string) =>{}



loga(User.password!)

//unions

type Author = {
    books:string[]
}

const author: Author & user = {
    age:2,
    books: ["1"],
    email: "anton@gmail.com",
    firstName: "John",
    order:[],
    register(){
        return "Please"
    },
}

//interfaces
interface userInterface  {
    readonly firstName: string
    email: string
}

interface AuthorInterface {
    books: string[];
}

const newAuthor:  AuthorInterface & userInterface = {
email: "easden@",
firstName: "easden",
books: [],
};

const emailUser: userInterface ={
    email:"anton@gmail.com",
    firstName: "John",
}

type Grade = number | string;
const grade: Grade  = 1;