const numbers = [1, 2, 3, 4, 5]

const max = numbers.reduce(callback, -Infinity)

function callback(accumulator, value){
    if (accumulator > value){
        return accumulator
    } else {
        return value
    }
}

// 

const numbers = [1, 2, 3, 4, 5]

const max = numbers.reduce(sum)

function sum(accumulator, value){
    return accumulator + value
}

//

const store = [{
    product: 'laptop',
    value: 1500,
    count: 4
},
{
    product: 'desktop',
    value: 1500,
    count: 4
},
{
    product: 'mobile',
    value: 500,
    count: 10
}]

const totalValueStore = store.reduce((acc, item) => acc + (item.value * item.count), 0)

