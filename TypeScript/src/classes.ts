interface IPerson{
    id: number;
    name: string;
    age: number;
    sayMyName(): string;
}

class Person implements IPerson{
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number){
        this.id= id;
        this.name= name;
        this.age= age;
    }

    sayMyName():string{
        return this.name;
    }
}

// Mesma coisa que acima
class PeronRefact{
    constructor(
        readonly nid: number,
        protected name: string,
        private age: number
    ) {}
}

const person1 = new Person(1, "Carlos", 18);