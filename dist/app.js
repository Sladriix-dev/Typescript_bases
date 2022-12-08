"use strict";
const a = "Hello world";
const n = 3;
const b = true;
const d = null;
// any permet de ne pas spécifier le type, ce n'est pas une bonne pratique mais il y a une combinaison de typage
const arr = ['aze', 'aze', 3];
// Le "?" permet de dire qu'une propriete est optionnelle
const user = { firstname: "John", lastname: "Doe" };
// Peut aussi s'écrire comme ca :
const user2 = { firstname: "John", lastname: "Doe" };
const date = new Date();
const cb = (e) => {
    // void permet de dire qu'on n'attend pas de retour = très pratique pour les mouseEvent
};
const bc = (e) => {
    return 3;
    // Voila à quoi ressemble une function callback en bon ts
};
function printId(id) {
    console.log(id.toString());
}
const compteur = document.querySelector('#compteur');
// Permet de donner un typage à compteur mais ATTENTION à son utilisation
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
/************** Narrowing *****************/
// TOUJOURS Préférer le Narrowing basé sur des conditions car laisse le code gérer les cas
function printId2(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString);
        // TS comprend direct que id est un nbr = narrowing
    }
    else {
        console.log(id.toUpperCase());
    }
}
function example(a, b) {
    if (a === b) {
        console.log(a);
        // Ici Ts compare le type des deux variables pour trouver celle(s) en commun
    }
}
function example2(a) {
    if ("value" in a) {
        return a;
        // Ici la clé value est présente uniquement dans l'input et donc Ts comprends que a est de type HTMLInputElement
    }
}
function isDate(a) {
    return a instanceof Date;
}
function example3(a) {
    if (isDate(a)) {
        return a;
        // a est bien une date puisqu'on a réduit son typage avec le retour de la function isDate ("a is Date")
    }
}
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
// Prend le type de la clé mentionnée
const user3 = { firstname: "John", lastname: "Doe" };
function identity(arg) {
    return arg;
}
const aa = identity(3);
// Ici la variable reste de type any et ne prend pas en compte le type de l'argument que l'on passe
function identity2(arg) {
    return arg;
}
const aa2 = identity2(3);
// Maintenant je peux préciser le type de ma variable
const aa3 = ["aze", "aze", 3];
// Utilisation d'un générique dans un type
function consoleSize(arg) {
    // Contient un objet qui a une clé length
    console.log(arg.length);
    return arg;
}
const abb = consoleSize(['3', 2]);
