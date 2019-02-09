const { calculateFrequency } = require('./lib/lib')

let text = 'È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile.'
const original = text
let categories = {}

for (let i = 0, letters = text.split(''); i < letters.length; letters = letters.filter(el => el !== letters[i])) {
  const letter = letters[i]
  const frequency = calculateFrequency(original, letter)
  categories[frequency] = [...categories[frequency] || [], letter]
}

[...Object.values(categories)].forEach(category => {
  while (category.length !== 0) {
    const ascii = category.map(el => el.charCodeAt(0))
    const [max, min] = String.fromCharCode(Math.max(...ascii), Math.min(...ascii))

    text = text.split(max).join('*').split(min).join(max).split('*').join(min)

    category.splice(category.indexOf(min), 1)
    category.splice(category.indexOf(max), 1)
  }
})

console.log('Testo originale: ', original)
console.log('Testo criptato: ', text)
