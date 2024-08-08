ECMAScript 6, également connu sous le nom de ES6 ou ECMAScript 2015, a introduit de nombreuses fonctionnalités importantes dans le langage JavaScript. Voici un résumé des principales nouveautés :

### 1. **Déclarations de variables avec `let` et `const`**
   - `let` permet de déclarer des variables avec une portée de bloc, contrairement à `var` qui a une portée de fonction.
   - `const` permet de déclarer des variables dont la valeur ne peut pas être modifiée après l'initialisation.

### 2. **Fonctions fléchées (`=>`)**
   - Les fonctions fléchées offrent une syntaxe plus concise pour les fonctions anonymes et ne lient pas leur propre `this`.

   ```javascript
   const add = (a, b) => a + b;
   ```

### 3. **Classes**
   - ES6 introduit une syntaxe de classe plus simple pour la création d'objets et l'héritage, bien que sous le capot, cela utilise toujours les prototypes.

   ```javascript
   class Person {
     constructor(name) {
       this.name = name;
     }
     
     greet() {
       console.log(`Hello, ${this.name}!`);
     }
   }
   ```

### 4. **Modules**
   - Les modules permettent d'organiser le code en fichiers séparés et facilitent l'importation et l'exportation de fonctions, objets, et variables.

   ```javascript
   // module.js
   export const pi = 3.14;
   export function area(radius) {
     return pi * radius * radius;
   }

   // main.js
   import { area } from './module.js';
   ```

### 5. **Chaine de caractères avec `` ` `` (Template Literals)**
   - Les littéraux de gabarit permettent l'insertion de variables et d'expressions dans des chaînes de caractères à l'aide de `${}`.

   ```javascript
   const name = 'World';
   console.log(`Hello, ${name}!`);
   ```

### 6. **Destructuration**
   - La destructuration permet d'extraire des valeurs d'objets ou de tableaux et de les assigner à des variables.

   ```javascript
   const [a, b] = [1, 2];
   const { x, y } = { x: 10, y: 20 };
   ```

### 7. **Rest et Spread Operators**
   - Les opérateurs `...` permettent de collecter des éléments dans un tableau ou un objet, ou de les étendre dans de nouveaux tableaux ou objets.

   ```javascript
   function sum(...numbers) {
     return numbers.reduce((acc, curr) => acc + curr, 0);
   }

   const arr = [1, 2, 3];
   const newArr = [...arr, 4, 5];
   ```

### 8. **Promesses**
   - Les promesses facilitent la gestion des opérations asynchrones et la gestion des résultats ou erreurs de manière plus élégante que les callbacks.

   ```javascript
   new Promise((resolve, reject) => {
     // Asynchronous operation
     if (success) resolve('Success');
     else reject('Failure');
   })
   .then(result => console.log(result))
   .catch(error => console.error(error));
   ```

### 9. **Symboles**
   - Les symboles sont des valeurs uniques et immuables souvent utilisées comme clés de propriétés d'objets pour éviter les collisions de noms.

   ```javascript
   const mySymbol = Symbol('description');
   const obj = { [mySymbol]: 'value' };
   ```

### 10. **Itérateurs et Générateurs**
   - Les itérateurs permettent de créer des objets qui peuvent être itérés avec une boucle `for...of`.
   - Les générateurs (`function*`) permettent de créer des fonctions qui peuvent être interrompues et reprises plus tard.

   ```javascript
   function* generator() {
     yield 1;
     yield 2;
     yield 3;
   }

   for (const value of generator()) {
     console.log(value);
   }
   ```

