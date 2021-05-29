const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

// REDUCE
// Get the total mass of all characters

const totalMass = characters.reduce((acc, curr) =>  acc + curr.mass, 0)

console.log(totalMass)
// Get the total height of all characters

const totalHeight = characters.reduce((acc, character) => acc + character.height, 0)

console.log(totalHeight)

// Get the total number of characters in all the character names

const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length
, 0)

console.log(totalNameCharacters)

// Get the total number of characters by eye color (hint. a map of eye color to count)

const charactersByEyeColor = characters.reduce((acc, cur) => {
    if(acc[cur.eye_color]) {
        acc[cur.eye_color]++
    } else {
        acc[cur.eye_color] = 1
    }
    return acc
}, {})
console.log(charactersByEyeColor)


// MAP
// Get an array of all names

const allNames = characters.map( character => {
    return character.name
})

console.log(allNames)

// Get an array of all heights
// Get an array of objects with just name and height properties

const nameAndHeight = characters.map( character => {
   return {
       name: character.name,
       height: character.height
   }
})

console.log(nameAndHeight)
// Get an array of all first names
const firstNames = characters.map( character => {
    let twoNames =character.name.split(' ')
    return twoNames[0]
})

console.log(firstNames)

// FILTER
// Get characters with mass greater than 100

const highMass = characters.filter( character => character.mass > 100)

console.log(highMass)

// Get characters with height less than 200
// Get all male characters

const maleCharacters = characters.filter( character => character.gender === 'male')

console.log(maleCharacters)

// Get all female characters

// SORT
// Sort by name

const sortedNames = characters.sort( (a, b) => a.name.localeCompare(b.name))

console.log(sortedNames)

// Sort by mass

const sortedMass = characters.sort( (a, b) => b.mass - a.mass)

console.log(sortedMass)
// Sort by height
// Sort by gender

const sortGender = characters.sort( (a, b) => a.gender.localeCompare(b.gender))

console.log(sortGender)

// EVERY
// Does every character have blue eyes?

const blueEyes = characters.every(character => character.eye_color === 'blue')

console.log(blueEyes)

// Does every character have mass more than 40?

const over40 = characters.every(character => character.mass > 40)

console.log(over40)
// Is every character shorter than 200?

const shorterThan200 = characters.every(character => character.height < 200)
console.log(shorterThan200)

// Is every character male?
const isMale = characters.every(character => character.gender === 'male')
console.log(isMale)
// SOME
// Is there at least one male character?

const oneMale= characters.some(character => character.gender === 'male')
console.log(oneMale)
// Is there at least one character with blue eyes?
const oneBlueEyes= characters.some(character => character.eye_color === 'blue')
console.log(oneBlueEyes)
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?
const massLess50 = characters.some(character => character.mass < 50)
console.log(massLess50)

