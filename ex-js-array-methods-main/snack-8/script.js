const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
//find
const student = students.find((alumn) => {
  return alumn.name === 'Marco Lanci'
})
console.log(student.class)
//for each
students.forEach((student) => {
  if (student.name === 'Marco Lanci') {
    console.log(student.class)
  }
})
//for loop
for (let i = 0; i < students.length; i++) {
  const thisStudent = students[i]
  if (thisStudent.name === 'Marco Lanci') {
    console.log(student.class)
  }
}