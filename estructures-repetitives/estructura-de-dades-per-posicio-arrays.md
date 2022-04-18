# ESTRUCTURA DE DADES PER POSICIÓ: ARRAYS

## Diferència d'estructura de dades: Objectes literals i Arrays

> Els objectes literals, ens permeten emmagatzemar col·leccions de valors amb keys. Per accedir o modificar al seu contingut, ho fem a partir de la ```keys```.

Exemple:
```
const car = {
    model: 'Ibiza',
    brand: 'Seat',
    cilindrada: 120,
}

console.log(car.model) // Ibiza

car.turbo = true

console.log(car.turbo) // true
```

Però existeixen casos en què volem emmagatzemar valors ordenats i poder accedir a ells segons el **ordre** en la llista. En aquest cas faríem servir les **Arrays**.

Exemple:
```
const cities = ['Barcelona', 'Londres', 'Berlín', 'Roma']

console.log(cities[0]) // Barcelona
console.log(cities[1]) // Londres
console.log(cities[2]) // Berlín
console.log(cities[3]) // Roma

console.log(cities.length) // 4
cities[4] = 'Paris'

console.log(cities) // 'Barcelona', 'Londres', 'Berlín', Roma', 'Paris'
```

🚨
> Els objectes no tenen cap funció on puguem guardar o recuperar una propietat en una posició concreta.

##  **Mètodes array**

Les arrays tenen moltíssims mètodes que ens permeten manejar l'ordre dels seus elements.

### **Array com a cua**

En ciències de la computació ens referim a una **cua** o **queue** com col·leccions ordenades que suporten dues operacions:

**[ ]  ⬅️  push:** afegir un element al final.

**⬅️  [ ] shift:** obtenir un element del principi, avançant la cua, on el segon element passa a ser el primer.

### **Array com a stack**

També existeix un altre concepte d'estructura de dades que és la **stack**. Aquesta estructura suporta:

**[ ]  ⬅️  push:** afegir un element al final 

**[ ] ➡️  pop:** obtindre un element del final.

🔎 
> Les arrays tenen aquestes funcions, així que permeten ser utilitzades com a **queue** o com **stack**. En ciències de la computació quan una estructura de dades permet ser feta servir de les dues maneres es coneguda com a **deque**.

### **PUSH**

[ ]  ⬅️ 

Afegeix un element al **final** de l'array.

```
let fruits = ["Apple", "Orange"]

fruits.push("Pear")

alert( fruits ) // Apple, Orange, Pear
```

### **POP**

[ ] ➡️  

Exteu un element del **final** del array.

```
let fruits = ["Apple", "Orange", "Pear"]

let lastFruit = fruits.pop() // Pear

alert( fruits ) // Apple, Orange
```

### **SHIFT**

⬅️  [ ]

Extreu el **primer** element del array.

```
let fruits = ["Apple", "Orange", "Pear"]

let firstFruit = fruits.shift() // Apple

alert( fruits ) // Orange, Pear
```

### **UNSHIFT**

➡️  [ ]

Afegeix un element al **principi** del array.

```
let fruits = ["Orange", "Pear"]

fruits.unshift('Apple')

alert( fruits ) // Apple, Orange, Pear
```

### **Performance**

🐢 Els que operen a l'inici de l'array.

🐇 Els que operen al final de l'array.

Això és perquè en extreure o introduir un element de l'inici de l'array, n'hi han de recol·locar tots els elements de l'array. Si fem servir el ```shift```, haurem de passar el segon element a la primera posició, el tercer a segona i així fins al final.

## **Mètodes per transformar un array** 

### **SORT**

La crida a ```sort``` ordena l'array al seu lloc, canviant l'ordre dels elements.

També retorna l'array ordenada, però el valor retornat normalment s'ignora, ja que es modifica el mateix array.

```
const cities = ['Barcelona', 'Londres', 'Berlín', 'Roma']

cities.sort()

console.log(cities) // ['Barcelona', 'Berlín', 'Londres', 'Roma']
```

### **REVERSE**

El mètode ```reverse``` inverteix l'ordre dels elements a l'array.

```
let arr = [1, 2, 3, 4, 5]
arr.reverse()

console.log( arr ) // 5,4,3,2,1
```

### **Curiositats**

```
const listBooks = []
listBooks[123] = ['Game of Thrones']
console.log(listBooks.length) //124
```

```
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log( matrix[1][1] ) // 5
```

### 📚 Recursos

Més [curiositats sobre l'array](https://javascript.info/array#a-word-about-length)


