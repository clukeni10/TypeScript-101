"use strict";
class Person {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
// Mesma coisa que acima
class PeronRefact {
    nid;
    name;
    age;
    constructor(nid, name, age) {
        this.nid = nid;
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person(1, "Carlos", 18);
