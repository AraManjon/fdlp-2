# TIPUS DE DADES

Existeixen diferents tipus de dades segons el valor que contingui.

## **Primitives** 

Primitius vol dir que són immutables. Serien tots els tipus excepte els objectes.

Hi han 7:

### **String** 

typeof instance === "string"

Per representar dades textuals.

S'escriuen entre cometes dobles " " o simples ' '.

El primer element estarà en l'índex 0, el sigüent en l'índex 1, i successivament.

```
const exempleString = "I'm a string"
console.log(exempleString[0]) //output: 'I'
```
----------

### **Number** 

typeof instance === "number"

Per representar numèrics.

```
const exempleNumber = 1
```

----------

### **Boolean** 

typeof instance === "boolean"

true || false

```
let exempleBoolean = true
```

--------

### **Undefined** 

typeof instance === "undefined"

Una variable a la qual no se li ha assignat valor, és undefined.

```
const exempleUndefined = undefined
```

---------

### **Null** 

typeof instance === "object"

instance === null

Representa la intencionalitat d'un valor nul o buit.

```
const exempleNull = null
```
----------

### **BigInt** 

typeof instance === "bigint"

🚨 No té ús habitual

----------

### **Symbol** 

typeof instance === "symbol"

🚨 No té ús habitual

----------

### ❓ **Entendre que vol dir que no siguin mutables** 

Exemple:
```
const firstName = 'Pepito'
firstName.toUpperCase()
console.log(firstName) // output: Pepito, expected: PEPITO
```

No es modifica l'string original, si no que el mètode ```toUpperCase()``` retorna un nou string.

### **Conversió de tipus** 

#### Convertir a String

```
let value = true

value = String(value) // "true"
console.log(typeof value) // string
```

#### Convertir a Number

```
let value = '123'

value = Number(value) // 123
console.log(typeof value) // number
```

| Valor |   Es transforma... |
|-------|--------------------|
|undefined |    NaN
|null	   |    0
|true i false|	1 i 0
|string	| si l'string és buit es transforma en 0. Si el contingut es llegeix com a string retorn NaN.

Notes:

> **NaN** és una propietat global que representa Not-A-Number. El que ens indica és que el valor no es pot representar dins de les limitacions d'un tipus numèric, encara que és considerat de tipus number.
>
>typeof instance === 'number'

#### Convertir a Boolean

```
console.log( Boolean(1) ) // true
console.log( Boolean(0) ) // false

console.log( Boolean("hello") ) // true
console.log( Boolean("") ) // false
console.log( Boolean(" ") ) // true
```

| Valor |   Es transforma... |
|-------|--------------------|
|undefined, null, '', 0, NaN |    false
|altres	   |    true

