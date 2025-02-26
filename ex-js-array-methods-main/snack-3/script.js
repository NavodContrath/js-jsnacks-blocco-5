const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]
//map
const newNumbers = numbers.map((numb) => {
    return numb + 1
})
console.log(newNumbers)
//for loop
let newerNumbers = []
for (let i = 0; i < numbers.length; i++) {
    const thisNumber = numbers[i]
    newerNumbers.push(thisNumber + 1)
}
console.log(newerNumbers)
//for each
let newernewerNumbers = []
numbers.forEach((numb) => {
    newernewerNumbers.push(numb + 1)
})
console.log(newernewerNumbers)

