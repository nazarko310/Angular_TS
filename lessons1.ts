// Создать интерфейс по такой объект:
// [{
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// }]
interface Employee {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string
        geo: {
            lat: number,
            lng: number
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}


function employeeOnTheWork(employee: Employee) {
    console.log(employee);
}

employeeOnTheWork({
    id: 1,
    name: 'Leanne Graham',
    username: "Bret",
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: -37.3159,
            lng: 81.1496
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    }
})


// создать класс юзера с полями name, age, city, status
// и методами:
// getName
// setName
// getAge
// setAge
// getCity
// setCity
// changeStatus


class User {
    private name: string
    private age: number
    private city: string
    private status: boolean

    constructor(name: string, age: number, city: string, status: boolean) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.status = status;
    }

    getName() {
        return this.name
    }

    setName(newName: string) {
        if (!newName) {
            return 'Error'
        }
        this.name = newName
    }

    getAge() {
        return this.age
    }

    setAge(newAge: number) {
        if (newAge < this.age && newAge < 0) {
            return 'Error'
        }
        this.age = newAge
    }

    getCity() {
        return this.city
    }

    setCity(newCity) {
        if (!newCity) {
            return 'Error'
        }
        this.city = newCity
    }

    chageStatus(newStatus: boolean) {
        this.status = newStatus
    }
}

let user = new User('Vasia', 15, 'Rivne', true);
user.setAge(20);
user.chageStatus(false)
console.log(user);

// написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal

interface Animal {
    swim: string,
    go: string,
    run: string,
    speak: string
    info: (info: string) => string
}


class Cat implements Animal {

    go: string;
    run: string;
    speak: string;
    swim: string;

    info(info: string): string {
        return `${this.go}, ${this.run}, ${this.swim}, ${this.speak}`
    };

    constructor(go: string, run: string, speak: string, swim: string) {
        this.go = go;
        this.run = run;
        this.speak = speak;
        this.swim = swim;
    }

}


class Bird implements Animal {

    go: string;
    run: string;
    speak: string;
    swim: string;

    info(info: string): string {
        return `${this.run}, ${this.speak}`
    }

    constructor(go: string, run: string, speak: string, swim: string) {
        this.go = go;
        this.run = run;
        this.speak = speak;
        this.swim = swim;
    }


}

class Fish implements Animal {
    go: string;
    run: string;
    speak: string;
    swim: string;

    info(info: string): string {
        return `${this.swim}`
    }

    constructor(go: string, run: string, speak: string, swim: string) {
        this.go = go;
        this.run = run;
        this.speak = speak;
        this.swim = swim;
    }
}

let animal: Animal[] = [
    new Cat('Go', 'Run', 'May', 'Swim'),
    new Fish('NoGo', 'NoRun', 'NoSpeak', 'Swim'),
    new Bird('NoGo', 'CanFly', 'CanSing', 'NoSwim')
]


let fish = animal[1] as Fish
console.log(fish.info(''));
