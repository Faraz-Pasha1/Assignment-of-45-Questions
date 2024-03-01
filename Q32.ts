let current_users : string [] = ["faraz" , "azan" , "armaan" , "zunaira" , "iqbal"]
let new_users : string [] = ["faraz" , "azan" , "ali" , "maaz" , "salman"]

for (let newuser of new_users) {
    if (newuser.includes("Faraz" && "azan"))
    console.log("the person will need to enter a new username")
else { 
    console.log("username is available.")
}
}