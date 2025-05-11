const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // it would make dc_heroes as another object which was added so output is not that we want 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); 3rd entrys 1st would be flash it woudl be such 

// const allHeros = marvel_heros.concat(dc_heros) // this would merge 2 arrays  but for merginf more than 2 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // use for mergeing more than 2 or 2 array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // recursively flats whole array into single array 
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // makes array from string
console.log(Array.from({name: "hitesh"})) // interesting  // interview key valuse se array nhi bn rha h 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));