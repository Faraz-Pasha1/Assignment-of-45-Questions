let person_name2 = "Faraz"
console.log("lowercase", person_name2.toLowerCase())
console.log("upperlowercase", person_name2.toLocaleUpperCase())
console.log("titlecase", person_name2.replace(/\bw/g,c => c.toUpperCase()))