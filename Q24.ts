let cars: string = 'subaru';
let age: number = 25
let numericals: number [] = [1,2,3,4]


console.log(cars == 'subaru')
console.log(cars != 'subaru')

console.log(cars.toLowerCase() == 'faraz')
console.log(cars.toLowerCase() != 'faraz')

console.log(age == 25)
console.log(age != 25)
console.log(age > 25)
console.log(age < 25)
console.log(age >= 25)
console.log(age <= 25)

console.log(age >20 && age < 30)
console.log(age >20 || age < 30)

console.log(3 in numericals)
console.log(5 in numericals)
console.log(numericals.includes(3))
console.log(numericals.includes(6))