// app.ts

export class Hero {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    myName() {
        return this.name;
    }
}

let hero = new Hero('Austin');
console.log(hero.myName());
console.log("Need to get better lad.");