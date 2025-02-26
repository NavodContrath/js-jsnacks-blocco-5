const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]
//filter
const even = nums.filter((numb) => {
    if (numb % 2 == 0) {
        return true
    }
    return false
})
console.log(even)
//for each
const evenNumbers = []
nums.forEach((numb) => {
    if (numb % 2 === 0) {
        evenNumbers.push(numb)
    }
})
console.log(evenNumbers)
//for loop
const evenNUmbers = []
for (let i = 0; i < nums.length; i++) {
    const thisNumb = nums[i]
    if (thisNumb % 2 === 0) {
        evenNUmbers.push(thisNumb)
    }
}
console.log(evenNUmbers)