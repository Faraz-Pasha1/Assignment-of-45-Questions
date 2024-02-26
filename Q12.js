var name_forGreetings = ["Faraz", "Azan", "Zunaira", "Armaan"];
var message_forGreetings = " have a nice day";
console.log(name_forGreetings[0] + message_forGreetings);
console.log(name_forGreetings[1] + message_forGreetings);
console.log(name_forGreetings[2] + message_forGreetings);
name_forGreetings.map(function (items) { return console.log("".concat(items).concat(message_forGreetings)); });
for (var i = 0; i < name_forGreetings.length; i++) {
    console.log(name_forGreetings[i] + message_forGreetings);
}
