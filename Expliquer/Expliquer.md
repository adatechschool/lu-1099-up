# Expliquer
# Mots clés

- Signature :

Elle décrit ce que fait la fonction (valeur d'entrées et de sorties) dont le type de données, paramètres (optionnels) et arguments. 

[http://www.coursweb.ch/javascript/func-params.html](http://www.coursweb.ch/javascript/func-params.html) 

- Déclaration :

« Déclarer » permet de réserver un emplacement mémoire pour une **variable/fonction.**

La **déclaration** d'une **variable** précise son nom et son type, parfois sa valeur initiale.

La **déclaration** d'une **fonction** précise son nom et ses arguments, et ses instructions.

- Paramètres Vs Arguments:

Un **paramètre** est une variable nommée passée à une fonction. 

Les paramètres servent à importer des ***arguments*** à l'intérieur des fonctions.

Les paramètres d'une fonction sont les noms listés dans la définition de la fonction.

Les **arguments** d'une fonction sont les valeurs réelles passées à la fonction. [Un argument est une valeur (primitive ou objet) passée en tant qu'entrée à une fonction.]

Les paramètres sont initialisés avec les valeurs des arguments fournis

- Récursivité :

Une fonction peut faire référence à elle-même et s'appeler elle-même. 

```
def f(x):
    x = 2 * x
    f(x)
    return x
```

- Pile d’appel , en anglais "**Callstack**":

Une pile d'exécution est le mécanisme d'un interpréteur (comme l'interpréteur de JavaScript sur un navigateur web) pour conserver la trace de son emplacement dans un script qui appelle plusieurs fonctions depuis d'autres fonctions — quelle fonction est en cours d'exécution, quelles fonctions sont appelées depuis cette fonction et doivent être appelées ensuite, etc.

- Fonctions anonymes :

C'est une fonction sans nom (entre *function* et les parenthèses) qui n'est souvent utilisée qu'une seule fois et à un seul endroit.

```
let show = function () {
console.log('Anonymous function');
};
```

- Fonctions fléchées :

Les fonctions fléchées sont des fonctions qui possèdent une syntaxe très compacte, ce qui les rend très rapide à écrire. Les fonctions fléchées utilisent le signe => qui leur a donné leur nom à cause de sa forme de flèche.

→ une instruction

→ une ligne

→ pas de return dans le corps de la fonction

```
const myFn = x => x + 1;
//même écriture
const myFn = (x) => {
  return x + 1;
};

//syntaxe utilisée avec certaines méthodes
const nums = [1, 2, 3, 4, 5];
const odds = nums.filter(v => v % 2); // [1, 3, 5]
const oddsSum = odds.reduce((sum, v) => sum + v, 0); // 9
```

**Les fonctions fléchées ne lient pas leurs propres this mais héritent de la portée parente, appelée "portée lexicale".*

