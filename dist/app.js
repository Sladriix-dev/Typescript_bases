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
// Permet de donner un typage à compteur
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
