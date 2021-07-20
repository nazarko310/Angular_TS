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