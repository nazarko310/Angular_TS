function employeeOnTheWork(employee) {
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
});
// создать класс юзера с полями name, age, city, status
// и методами:
// getName
// setName
// getAge
// setAge
// getCity
// setCity
// changeStatus
var User = /** @class */ (function () {
    function User(name, age, city, status) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.status = status;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (newName) {
        if (!newName) {
            return 'Error';
        }
        this.name = newName;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setAge = function (newAge) {
        if (newAge < this.age && newAge < 0) {
            return 'Error';
        }
        this.age = newAge;
    };
    User.prototype.getCity = function () {
        return this.city;
    };
    User.prototype.setCity = function (newCity) {
        if (!newCity) {
            return 'Error';
        }
        this.city = newCity;
    };
    User.prototype.chageStatus = function (newStatus) {
        this.status = newStatus;
    };
    return User;
}());
var user = new User('Vasia', 15, 'Rivne', true);
user.setAge(20);
user.chageStatus(false);
console.log(user);
