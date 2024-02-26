import { workerData } from "worker_threads"

let world_places : string [] = ["Pakistan" , "India" , "China" , "Saudia Arabia" , "America"]
console.log("original: " + world_places)
console.log("Al[habetic Order: " + world_places.sort())
console.log("still in original: " + world_places)
console.log("Reverse Order: " + world_places.sort().reverse())
console.log("Original: " + world_places)
console.log("reverse original order: " + world_places.reverse())
console.log("Back to original: " + world_places)
console.log("alphabetic order: " + world_places.sort())
console.log("reverse alphabetic order: " + world_places.sort().reverse())
