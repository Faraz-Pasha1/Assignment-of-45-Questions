let name_forGreetings : string [] = ["Faraz" , "Azan" , "Zunaira", "Armaan"]
let message_forGreetings = " have a nice day"
console.log(name_forGreetings[0] + message_forGreetings )
console.log(name_forGreetings[1] + message_forGreetings )
console.log(name_forGreetings[2] + message_forGreetings )
name_forGreetings.map((items) => console.log(`${items}${message_forGreetings}`))
for(let i=0; i<name_forGreetings.length; i++) {
    console.log(name_forGreetings[i] + message_forGreetings)
}
