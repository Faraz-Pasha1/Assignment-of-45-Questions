let users : string [] = ["faraz" , "admin" , "Azan" , "Zunaira" , "armaan"]
if (users.length === 0) {
    console.log("We need to find some users!")
} else {
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin! would you like to see the report")
        } else {
            console.log(`Hello ${user} We need to find some users!`)
        }
    }
}
