var current_users = ["faraz", "azan", "armaan", "zunaira", "iqbal"];
var new_users = ["faraz", "azan", "ali", "maaz", "salman"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newuser = new_users_1[_i];
    if (newuser.includes("Faraz" && "azan"))
        console.log("the person will need to enter a new username");
    else {
        console.log("username is available.");
    }
}
