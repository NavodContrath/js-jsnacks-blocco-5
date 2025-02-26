const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.
//filter
const longerZucchini = zucchine.filter((zucchina) => {
  if (zucchina.length > 15) {
    return true
  }

  return false
})
const shorterZucchini = zucchine.filter((zucchina) => {
  if (zucchina.length < 15) {
    return true
  }
  return false
})
console.log(longerZucchini, shorterZucchini);
//for each
const longZucchini = []
const shortZucchini = []
zucchine.forEach((zucchina) => zucchina.length > 15 ? longZucchini.push(zucchina) : shortZucchini.push(zucchina))
console.log(longZucchini, shortZucchini)
//for loop
const longlongZucchini = []
const shortshortZucchini = []
for (let i = 0; i < zucchine.length; i++) {
  const thisZucchina = zucchine[i]
  if (thisZucchina.length > 15) {
    longlongZucchini.push(thisZucchina)
  } else {
    shortshortZucchini.push(thisZucchina)
  }
}
console.log(longlongZucchini, shortshortZucchini)

