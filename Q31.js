var users = ["faraz", "admin", "Azan", "Zunaira", "armaan"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "admin") {
            console.log("Hello admin! would you like to see the report");
        }
        else {
            console.log("Hello ".concat(user, " We need to find some users!"));
        }
    }
}
