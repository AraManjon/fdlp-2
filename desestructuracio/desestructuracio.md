# **DESESTRUCTURACIÓ O DESTRCTURING**

Les dues estructures de dades més utilitzades a JavaScript són Object i Array.

- Els objectes ens permeten crear una única entitat que emmagatzema elements de dades per clau.

- Les arrays ens permeten reunir elements de dades en una llista ordenada.

Tot i que, quan els passem a una funció, pot ser que no sigui necessari que sigui un objecte/arrays en conjunt. Pot ser que necessiti peces individuals.

L'assignació de desestructuració és una sintaxi especial que ens permet "descomprimir" arrays o objectes en un munt de variables, ja que de vegades és més convenient.

Exemple en arrays: 

Sense destructuring:
```
const colors = ['red', 'blue', 'yellow']

const redColor = colors[0]
const blueColor = colors[1]
const yellowColor = colors[2]

console.log(redColor) // 'red'
console.log(blueColor) // 'blue'
console.log(yellowColor) // 'yellow'
```

Amb destructuring:
```
const colors = ['red', 'blue', 'yellow']

const [ redColor, blueColor, yellowColor ] = colors

console.log(redColor) // 'red'
console.log(blueColor) // 'blue'
console.log(yellowColor) // 'yellow'
```

Exemple en objectes: 

Sense destructuring:
```
const car = {
    model: 'Ibiza',
    brand: 'Seat',
    cilindrada: 120,
}

const model = car.model
const brand = car.brand
const cilindrada = car.cilindrada

console.log(model) // 'Ibiza'
console.log(brand) // 'Seat'
console.log(cilindrada) // '120'
```

Amb destructuring:
```
const car = {
    model: 'Ibiza',
    brand: 'Seat',
    cilindrada: 120,
}

const { model, brand, cilindrada } = car

console.log(model) // 'Ibiza'
console.log(brand) // 'Seat'
console.log(cilindrada) // '120'
```

Notes:
> 🚨 Molt útil per ignorar alguns valors retornats per una funció.

Exemple:

```
function calculator (num1, num2) {
    const sum = num1 + num2
    const rest = num1 - num2
    const mult = num1 * num2
    const div = num1 / num2

    const result = {
        sum: sum,
        rest,
        mult,
        div
    }

    return result;
}

function showSum () {
    // const firstNum = Number(document.getElementById('num1')) 
    // const secondNum = Number(document.getElementById('num2'))

    const firstNum = 2
    const secondNum = 2

    const { sum } = calculator(firstNum, secondNum)
    alert(sum)
}

```