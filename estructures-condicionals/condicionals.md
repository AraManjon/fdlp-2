# CONDICIONALS

De vegades hem de determinar diferents accions segons diferents condicions.

## **Declaració ```if```**

La sentència ```if(...)``` avalua una condició entre parèntesis i, si el resultat és ```true```, executa un bloc de codi.

Si el bloc de codi està compost per una sola línia, ens podem estalviar les ```{}```.

```
const currentYear = 2022
const responseYear = prompt("En quin any estem?", '')

if (responseYear == currentYear) alert( 'Correcte!' )
```

Si el bloc de codi està compost per més d'una línia, és necessari ```{}```.
```
const currentYear = 2022
const responseYear = prompt("En quin any estem?", '')

if (responseYear == currentYear) {
  alert( 'Correcte!' )
  alert( "Ets molt intel·ligent" )
}
```

La condició a avaluar la podem extraure en una variable i així augmentar la llegibilitat.

```
const currentYear = 2022
const responseYear = prompt("En quin any estem?", '')
const isCorrect = currentYear == responseYear

if (isCorrect) {
  alert( 'Correcte!' )
  alert( "Ets molt intel·ligent" )
}
```

## **Conversió**

Avalua l'expressió entre parèntesis i converteix el resultat en un boolean.

```
if (0) {
    console.log('no entra')
}
```
```
if (1) {
    console.log('entra')
}
```

🚨 ```0, "", null, undefined i NaN``` són avaluats com a ```false```. 

```
Boolean('') //false
Boolean(' ') //true
Boolean([]) //true
Boolean({}) //true
```

## **Clàusula ```else```**

La instrucció ```if``` pot contenir un bloc opcional ```else```. S'executa quan la condició és ```false```.

```
const currentYear = 2022
const responseYear = prompt("En quin any estem?", '')
const isCorrect = currentYear == responseYear

if (isCorrect) {
    alert( 'Correcte!' );
} else {
    alert( "T'has equivocat..." );
}
```
## **Clàusula ```else if```**

Si volem tenir més d'una opció de condicionals que actuïn diferent en cada cas.

```
const currentYear = 2022
const responseYear = prompt("En quin any estem?", '')

const isEarlyYear = responseYear > currentYear
const tooLateYear = responseYear < currentYear

if (isEarlyYear) {
    alert( 'Massa aviat' )
} else if (tooLateYear) {
    alert( 'Massa tard' )
} else {
    alert( 'Correcte!' )
}
```
## **Operador condicional ```?```**

També conegut com a **ternari**. Ens ajuda a fer una operació condicionada d'una manera simple i més curta.
```
let result = condition ? value1 : value2
```
```
const isAccessAllowed;
const age = prompt('Quants anys tens?', '')

if (age > 18) {
  isAccessAllowed = true;
} else {
  isAccessAllowed = false;
}

alert(isAccessAllowed);
```

```
const isAccessAllowed = age > 18 ? true : false
```

👍 Quan executis l'operador ternari s'ha d'intentar mantenir l'expressió el més simple possible i no perdre la llegibilitat.

Exemple:
```
const isRunning = true

function stop () {
    console.log('stop ✋🏻')
}

function run () {
    console.log('run 🏃🏻‍♀️')
}

if (isRunning) {
    stop()
} else {
    run()
}

isRunning ? stop() : run()
```

👍 Prioritza les condicions assertives, ens ajuda a millorar la llegibilitat de la condicional. Les frases afirmatives solen ser més fàcils d'entendre que les negatives.

Exemple:
```
//Negativa
if (!canNotFormat){
    format()
}

//Positiva
if (canFormat){
    format()
}
```