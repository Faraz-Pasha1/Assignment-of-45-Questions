let transportation_mode : string [] = ["suzuki" , "Honda" , "toyota"]
console.log(`I would like to own a ${transportation_mode[0]} motorcyle`)
console.log(`I would like to own a ${transportation_mode[1]} motorcyle`)
console.log(`I would like to own a ${transportation_mode[2]} motorcyle`)
transportation_mode.map((items) => console.log(`I would like to own a ${items} motorcycle`))
for(let i=0; i<transportation_mode.length; i++) {
    console.log(`I would like to own a ${transportation_mode[i]} motorcycle`)
}