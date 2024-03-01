let username : string [] = ["faraz" , "admin" , "azan" , "zunaira" , "armaan"]
for(let user of username) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
}

