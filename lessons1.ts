function userArrayList(user: [{ name: string, age: number }]) {
    for (const userElement of user) {

        console.log(userElement);
    }

}

userArrayList([

        {
            name: 'Vasia',
            age: 12
        }
    ]
)


interface Car {
    model: string,
    power: number,
    speed: number
}

function setCar(car: Car) {
    // console.log(car);
}

setCar({
    model: 'audi', speed: 320, power: 270

})

class Audi implements Car {
    constructor(model: string, power: number, speed: number, sport: boolean) {
        this.model = model;
        this.power = power;
        this.speed = speed;
        this.sport = sport;
    }

    model: string;
    power: number;
    speed: number;
    sport: boolean
}

class BMW implements Car {
    model: string;
    power: number;
    speed: number;
    check: boolean

    constructor(model: string, power: number, speed: number, check: boolean) {
        this.model = model;
        this.power = power;
        this.speed = speed;
        this.check = check;
    }
}

let cars: Car[] = [
    new Audi('a4', 240, 300, true),
    new BMW('x5', 220, 350, false)
]

let carAudi = cars[0] as Audi;
console.log(carAudi.sport);


interface School {
    countOfClass: number,
    name: string,
    countOfChildren: number,
    gym: boolean,
    artHall: boolean
}

class SchoolOfMath implements School {
    artHall: boolean;
    countOfChildren: number;
    countOfClass: number;
    gym: boolean;
    name: string;
    competitions: boolean

    constructor(artHall: boolean, countOfChildren: number, countOfClass: number, gym: boolean, name: string, competitions: boolean) {
        this.artHall = artHall;
        this.countOfChildren = countOfChildren;
        this.countOfClass = countOfClass;
        this.gym = gym;
        this.name = name;
        this.competitions = competitions;
    }
}


class SchoolOfArt implements School {
    artHall: boolean;
    countOfChildren: number;
    countOfClass: number;
    gym: boolean;
    name: string;
    artRoom: boolean

    constructor(artHall: boolean, countOfChildren: number, countOfClass: number, gym: boolean, name: string, artRoom: boolean) {
        this.artHall = artHall;
        this.countOfChildren = countOfChildren;
        this.countOfClass = countOfClass;
        this.gym = gym;
        this.name = name;
        this.artRoom = artRoom;
    }
}

let schools: School[] = [
    new SchoolOfMath(false, 120, 5, true, 'SchoolOfMath', true),
    new SchoolOfArt(true, 500, 20, false, 'SchoolOfArt', true)
]

let competition = schools[0] as SchoolOfMath;

console.log(competition.competitions);


class Users {
    name: string
    private age: number

    ageGrow(newAge) {
        if (newAge > 0 && newAge < 100 && newAge != this.age) {
            this.age = newAge
        }
    }

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let user = new Users('Vasia', 15);
user.ageGrow(20);
console.log(user);


interface Computer {
    CPU: string,
    OZU: number,
}

class Laptop implements Computer {
    CPU: string;
    OZU: number;
    private batteryPower: number


    constructor(CPU: string, OZU: number, batteryPower: number) {
        this.CPU = CPU;
        this.OZU = OZU;
        this.batteryPower = batteryPower;
    }

    batteryPowerImprove(batteryImprove) {
        if (batteryImprove > this.batteryPower && batteryImprove > 20000)
            this.batteryPower = batteryImprove
    }
}

class PC implements Computer {
    constructor(CPU: string, OZU: number, game: boolean) {
        this.CPU = CPU;
        this.OZU = OZU;
        this.game = game;
    }

    CPU: string;
    OZU: number;
    game: boolean
}


let computers: Computer[] = [
    new Laptop('Intel', 8, 20000),
    new PC('AMD', 16, true)

]

let laptop = computers[0] as Laptop
laptop.batteryPowerImprove(30000)
console.log(laptop);


enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}


function genderSet(gender: Gender) {
    console.log(gender)
}

genderSet(Gender.MALE)


enum Size {
    S = 'S',
    M = 'M',
    L = 'L'
}


function sizeOfClothes(sizeOfClothe: Size) {
    console.log(sizeOfClothe)
}


sizeOfClothes(Size.S)