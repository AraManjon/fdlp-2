# VARIABLES

El primer que hem de conèixer quan aprenem un llenguatge de programació és a crear variables.

Les variables són com capces on guardarem valors.

## tipus de variable  + nom de la variable  +  assignació  +  valor

```
let name = 'Pepito'
```

Existeixen tres paraules reservades per declarar una variable:

## **let** 

És la paraula reservada que fem servir per declarar una variable que es pugi **reassignar**. 

Exemple:
```
let variable = 5
variable = 'cinc'
```

```
let variable
variable = 'value'
```

```
let variable = 5
let variable = 'cinc'
//error
```

## **const** 
És la paraula reservada que fem servir per declarar variables **constants**. És a dir, no es pugi reassignar.

Exemple:
```
const variable = 5
variable = 'cinc'
// error
```

```
const variable
//error
```
```
const variable = [1,2,3]
variable[0] = 2
console.log(variable) // output: [2,2,3]
```

Notes: 

> Utilitzar **const** en variables que tenim pensat que no es modifiqui el seu valor, ens ajuda a donar intencionalitat.

## **var**

La paraula reservada **var** la veurem en l'apartat [àmbit de variables](./ambit-variables.md).