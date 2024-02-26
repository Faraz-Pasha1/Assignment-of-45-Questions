//Guest List: If you could invite anyone, living or deceased, to dinner, who would
//you invite? Make a list that includes at least three people you’d like to invite to
//dinner. Then use your list to print a message to each person, inviting them to dinner.

let invite_list : string [] = ["Faraz" , "Azan", "Zunaira" , "Armaan"]
for(let i=0; i<invite_list.length; i++) {
    console.log(`${invite_list[i]}, i would like to you invite for a dinner. Thanks`)
}
invite_list.map((items) => console.log(`${items}, i would like to nvite you for a dinner. thanks`))