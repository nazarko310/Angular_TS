function userArrayList(user) {
    for (var _i = 0, user_1 = user; _i < user_1.length; _i++) {
        var userElement = user_1[_i];
        console.log(userElement);
    }
}
userArrayList([
    {
        name: 'Vasia',
        age: 12
    }
]);
function setCar(car) {
    // console.log(car);
}
setCar({
    model: 'audi', speed: 320, power: 270
});
var Audi = /** @class */ (function () {
    function Audi(model, power, speed, sport) {
        this.model = model;
        this.power = power;
        this.speed = speed;
        this.sport = sport;
    }
    return Audi;
}());
var BMW = /** @class */ (function () {
    function BMW(model, power, speed, check) {
        this.model = model;
        this.power = power;
        this.speed = speed;
        this.check = check;
    }
    return BMW;
}());
var cars = [
    new Audi('a4', 240, 300, true),
    new BMW('x5', 220, 350, false)
];
var carAudi = cars[0];
console.log(carAudi.sport);
var SchoolOfMath = /** @class */ (function () {
    function SchoolOfMath(artHall, countOfChildren, countOfClass, gym, name, competitions) {
        this.artHall = artHall;
        this.countOfChildren = countOfChildren;
        this.countOfClass = countOfClass;
        this.gym = gym;
        this.name = name;
        this.competitions = competitions;
    }
    return SchoolOfMath;
}());
var SchoolOfArt = /** @class */ (function () {
    function SchoolOfArt(artHall, countOfChildren, countOfClass, gym, name, artRoom) {
        this.artHall = artHall;
        this.countOfChildren = countOfChildren;
        this.countOfClass = countOfClass;
        this.gym = gym;
        this.name = name;
        this.artRoom = artRoom;
    }
    return SchoolOfArt;
}());
var schools = [
    new SchoolOfMath(false, 120, 5, true, 'SchoolOfMath', true),
    new SchoolOfArt(true, 500, 20, false, 'SchoolOfArt', true)
];
var competition = schools[0];
console.log(competition.competitions);
