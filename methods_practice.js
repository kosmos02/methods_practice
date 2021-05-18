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
