export class Animal {
    constructor(type, legs){
        this.type=type;
        this.legs=legs;
    }

    makeNoise(sound = 'Loud Noise '){
        console.log(sound);
    }

    get metaData(){
        return `Type: ${this.type} , Legs: ${this.legs}`;
    }

    static return10(){
        return 10;
    }
}

export class Cat extends Animal {
    makeNoise(sound = 'Meow'){
        console.log(sound);
    }
}