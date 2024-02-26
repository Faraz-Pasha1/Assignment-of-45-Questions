var transportation_mode = ["suzuki", "Honda", "toyota"];
console.log("I would like to own a ".concat(transportation_mode[0], " motorcyle"));
console.log("I would like to own a ".concat(transportation_mode[1], " motorcyle"));
console.log("I would like to own a ".concat(transportation_mode[2], " motorcyle"));
transportation_mode.map(function (items) { return console.log("I would like to own a ".concat(items, " motorcycle")); });
for (var i = 0; i < transportation_mode.length; i++) {
    console.log("I would like to own a ".concat(transportation_mode[i], " motorcycle"));
}
