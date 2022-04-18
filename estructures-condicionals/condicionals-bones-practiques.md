# BONES PRÀCTIQUES AMB CONDICIONALS

## **Incloure curly braces en if amb una sentència**

Encara que des de la nova actualització de JavaScript podem estalviar les '''{}''' en casos on hi ha una sola línia de codi dins d'un connacional if, les bones pràctiques ens diu que sempre és millor continuar incloent les '''{}''', ja que si el dia de demà augmenta aquest codi, només caldrà afegir les noves línies dins del bloc.

##  **Fer condicionals descriptius**

És molt fàcil acabar escrivint una condició que sigui difícil d'entendre... Això ens portaria a haver d'escriure comentaris explicant que fa exactament o invertir temps en esbrinar que és el que s'està comparant exactament.

Exemple:

```
const remaining = 0
const remainingPlayers = 10

function quitGame () {
  console.log('El joc ha finalatitzat!')
}

function checkGameStatus() {
  if (
    remaining === 0 ||
    (remaining === 1 && remainingPlayers === 1) ||
    remainingPlayers === 0
  ) {
    quitGame()
  }
}
```

Per millorar la lectura d'aquest condicional podem extraure una funció perquè comprovi aquest condicional:

```
const remaining = 0
const remainingPlayers = 10

function quitGame () {
  console.log('El joc ha finalatitzat!')
}

function isGameLost() {
  return (
    remaining === 0 ||
    (remaining === 1 && remainingPlayers === 1) ||
    remainingPlayers === 0
  );
}

function checkGameStatus() {
  if (isGameLost()) {
    quitGame();
  }
}
```

👍 Hem extret una funció amb un títol més descriptiu.
👍 La funció checkGame() queda més clara.

##  **Evitar sentències ```if``` niades**

🚨 Si una funció és molt gran i té massa línias indentades, ens estarà indicant que està fent moltes coses. **Les funcions només hi han de fer una cosa i fer-la bé**.

Solució:

1.- Hem d'intentar que les funcions siguin tan curtes com sigui possible, idealment de 4-5 línies, podem ficar-nos un màxim de línies de 15-20, encara que sempre hauriem de revisar si es pogués dividir en vàries funcions.

2.- Evitar nidar sentències ```if```, màxim 1-2 nivells d'indentació. Per evitar el codi espagueti 🍝.

Exemple:

```
function getPayAmount () {
    let amount;

    if (isDead) {
        amount = deadAmount()
    } else {
        if (isSeparated) {
            amount = separatedAmount()
        } else {
            if (isRetired) {
                amount = retiredAmount()
            } else {
                amount = normalPayAmount()
            }
        }
    }
    return amount;
}
```

### Per evitar condicionals nidats, podem fer servir les clàuseles guardades

És escriure el codi de forma que fa comprovacions de condicions abans de continuar amb l'execució del codi.

Exemple:
```
function getPayAmount() {
    if (isDead) return deadAmount() 
    if (isSeparated) return separatedAmount() 
    if (isRetired) return retiredAmount()
    return normalPayAmount()
}
```

##  **Evitar l'ús del ```else```**

L'else, ens deixa la porta oberta a tot el que no compleixi la condició del ```if```.

Acaba queden poc clar i explicatiu quan i perquè volem que s'executi el codi de la via alternativa que ens ofereix l'```else```.

👍 Millor utilitzar clàusules de guarda
👍 Operador ternari
👍 Retornar ```undefined``` quan no es dona la condició.

Exemple:

```
let person = { 
   phone: { 
      exists: false, 
      number: '+34 622 62 62 62' 
   }
}

// bad
function hasESNumber(user) {
   if (user.phone.exists === true) {
      if (user.phone.number.startsWith('+34')) {
        return true
      }
   } else {
        return false
   }    
}

// regular
function hasESNumber(user) {
   if (user.phone.exists === true && user.phone.number.startsWith('+34')) {
        return true
   } else {
        return false
   }    
}

// good
function hasESNumber(user) {
    if (user.phone.exists === true && user.phone.number.startsWith('+34')) {
        return true
    }
    return false
}

// better

function hasESNumber(user) {
    return user.phone.exists === true && user.phone.number.startsWith('+34')) 
}
```









