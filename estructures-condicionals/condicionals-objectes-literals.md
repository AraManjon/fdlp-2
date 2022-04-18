# CONDICIONALS AMB OBJECTES LITERALS

##  **Evitar l'ús del switch**

Normalment, utilitzem la sentència ```switch``` per operar amb diferents condicions i és una manera d'evitar l'ús de molts ```else-if```.

El problema de l'ús del ```switch```, és que crea un codi difícil de llegir, d'una forma complicada i amb una sintaxis poc intuïtiva.

Si volem afegir tres condicions noves, hauríem d'escriure massa codi burocràtic, un nou `case` amb el codi a operar i un `break`, i això per cada nou cas, al final es faria tediós i acabaríem copiant i enganxant codi...

Exemple:

```
function getPokemon(type) {

  let pokemon;
  switch (type) {
    case 'Water':
      pokemon = 'Squirtle'
      break
    case 'Fire':
      pokemon = 'Charmander'
      break
    case 'Plant':
      pokemon = 'Bulbasur'
      break
    case 'Electric':
      pokemon = 'Pikachu'
      break
    default:
      pokemon = 'Mew'
  }
  return pokemon;
}

console.log(getPokemon('Fire')) // Result: Charmander
```
## Com podem evitar l'ús del ```switch```? Amb ```literals d'objectes```.

Els objectes són simples, fàcils d'escriure, llegir i mantenir. Veiem com seria l'exemple anterior amb un literal d'objecte.

```
const pokemon = {
    Water: 'Squirtle',
    Fire: 'Charmander',
    Plant: 'Bulbasur',
    Electric: 'Pikachu'
  };

function getPokemon(type) {
  return pokemon[type] ?? 'Mew'
}
console.log(getPokemon('Fire')) // Result: Charmander

console.log(getPokemon('unknown')) // Result: Mew
```










