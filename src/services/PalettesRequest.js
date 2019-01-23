
const endPoint = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json'

const fetchPalettes = () =>fetch(endPoint).then(response=>response.json())

export {fetchPalettes};