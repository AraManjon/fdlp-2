# TIPUS DE DADES

Existeixen diferents tipus de dades segons el valor que contingui.

## **No primitives o referencies a OBJECTES**

Un objecte és un valor en memòria, quan es declara, es crea una referència que sempre apuntarà a aquesta primera instància de l'objecte.

En ciencias de la computació, un objeto es un valor en la memoria al que posiblement fa referència un identificador.

Són mutables, és a dir, es poden editar, eliminar o afegir propietats.

## **Objectes com a estructura de dades**

Dins dels objectes hi ha diferents tipus d'estructures de dades, com per exemple el Array i els Objectes.

### **Array**

typeof instance === "object"

instance instanceof Array

Representen llistes.

El primer element estarà en l'índex 0, el sigüent en l'índex 1, i successivament.

```
const fruites = ['Poma', 'Pinya', 'Pera']
console.log(fruites[0]) //output: 'Poma'
```

Poden contindre una llista de diferents tipus de dades.
```
const exampleList = [1, 'dos', [3,4], true]
```
-----------

### **Objecte literal**

typeof instance === "object"

Compost per una col·lecció d'elements que contenen **key** i **value**.

Per accedir al valor d'una propietat, podem fer-ho a través de la key.

```
const persona = { nom: 'Pepito', cognom: 'Grillo', edat: 45, greeting: function() {console.log('hello!')}, cities: ['Barcelona', 'Madrid'] }

console.log(persona.nom) // Output: Pepito
console.log(persona['nom']) // Output: Pepito
console.log(persona.cities[0]) // Output: Barcelona
console.log(persona.greeting()) // Output: hello!
```

També podem crear una nova propietat afegint una nova key amb un valor.

```
const persona = { nom: 'Pepito', cognom: 'Grillo', edat: 45 }

persona.city = 'Barcelona' 
console.log(persona) // Output: { nom: 'Pepito', cognom: 'Grillo', edat: 45, city: 'Barcelona' }
```

## **Funcions com a objectes**

Les funcions són objectes regulars amb la capacitat adicional de ser invocables.

typeof instance === "function"

instance instanceof Object

[Què és una funció?](../funcions/funcions-basic.md)

Exemple funció com a objecte:
```
function foo () {
    const result = 2
    return result
}

foo.call() // 2
foo.name // 'foo'
 ```

### ❓ **Entendre que vol dir que siguin mutables** 

```
const prices = ['5€', '10€']
prices[0] = '20€'
console.log(prices) // output: ['20€', '10€']
```

### ❓ **Entendre que vol dir que un objecte està referenciat** 

```
const persona = { nom: 'Pepito', cognom: 'Grillo', edat: 45 }
const personaWithCar = persona

personaWithCity.car = true
console.log(persona) 
// Expected: { nom: 'Pepito', cognom: 'Grillo', edat: 45 }
// Output:  { nom: 'Pepito', cognom: 'Grillo', edat: 45, car: true }
```

Notes:
> 🚨 Hem d'anar amb compte i tenir controlat quan volem modificar una dada de tipus objecte, ja que és posible que no volguem modificar la primera instància original, per això, és recomenable fer còpies de les dades tipus objecte quan volem treballar amb elles.

### **Com crear còpies d'objectes**

L'**spread operator** és una forma simple de recollir un per un els valors d'una estructura de dades, és a dir, itera l'estructura i de cada valor fa una copia dins d'una instancia nova de l'estructura.

Es fa servir afegint ```...``` a l'inici de la instància que volem copiar.

És una forma més expresiva.


Exemple en objectes: 
```
const persona = { nom: 'Pepito', cognom: 'Grillo', edat: 45 }
const copyPersona = {...persona}
const copyPersonaSenseSpreadOperator = Object.assign({}, persona)

copyPersona.edat = 10
console.log(persona.edat) // Output: 45
console.log(copyPersona.edat) // Output: 10
```

Exemple en arrays: 
```
const colors = ['red', 'blue', 'yellow']
const copyColors = [...colors]
const copyColorsSenseSpreadOperator = myArray.slice();

copyColors.push('white')
console.log(copyColors) // Output: ['red', 'blue', 'yellow', 'white']
console.log(colors) // Output: ['red', 'blue', 'yellow']
```

Notes:
> 🚨 Si el valor que conté aquesta estructura no és primitu, continuarà mantenint aquesta referencia, així que tindrem que trencar també la referencia d'aquest valor.

> Nous [tipus de dades](https://dev.to/briansanteliz/nuevos-tipos-de-datos-en-javascript-records-tuples-2kie) que s'introduiran aviat en Javascript per conseguir evitar aquesta mutabilitat en objectes i arrays.



