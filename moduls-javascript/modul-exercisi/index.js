import { calculateSum } from './logic/calculateSum.js'

const elementButton = document.getElementById('button')

elementButton.addEventListener('click', () => {
    const value = document.getElementById('num').value
    calculateSum(value)
})

