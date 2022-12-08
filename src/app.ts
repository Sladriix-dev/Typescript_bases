const a: string = "Hello world"
const n: number = 3
const b: boolean = true
const d: null = null

// any permet de ne pas spécifier le type, ce n'est pas une bonne pratique mais il y a une combinaison de typage
const arr: any[] = ['aze', 'aze', 3]

// Le "?" permet de dire qu'une propriete est optionnelle
const user: {firstname: string, lastname?: string} = {firstname: "John", lastname: "Doe"}
// Peut aussi s'écrire comme ca :
const user2: {firstname: string, [key: string]: string} = {firstname: "John", lastname: "Doe"}

const date: Date = new Date();

const cb: Function = (e: MouseEvent): void => {
    // void permet de dire qu'on n'attend pas de retour = très pratique pour les mouseEvent
}

const bc: (e: MouseEvent) => void = (e: MouseEvent): number => {
    return 3
    // Voila à quoi ressemble une function callback en bon ts
}

function printId(id: number): void {
    console.log(id.toString());
}

const compteur = document.querySelector('#compteur') as HTMLButtonElement
// Permet de donner un typage à compteur mais ATTENTION à son utilisation

let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span')
    if(span) {
        span.innerText = i.toString();
    }
}

/************** Narrowing *****************/ 

// TOUJOURS Préférer le Narrowing basé sur des conditions car laisse le code gérer les cas

function printId2(id: string | number)  {
    if(typeof id === "number") {
        console.log((id * 3).toString)
        // TS comprend direct que id est un nbr = narrowing
    } else {
        console.log(id.toUpperCase())
    }
}

function example (a: string | number, b: string | boolean) {
    if(a === b) {
        console.log(a);
        // Ici Ts compare le type des deux variables pour trouver celle(s) en commun
    }
}

function example2(a: MouseEvent | HTMLInputElement) {
    if ("value" in a) {
        return a;
        // Ici la clé value est présente uniquement dans l'input et donc Ts comprends que a est de type HTMLInputElement
    }
}

function isDate(a: any): a is Date {
    return a instanceof Date
}

function example3 (a: Date | HTMLInputElement) {
    if (isDate(a)) {
        return a;
        // a est bien une date puisqu'on a réduit son typage avec le retour de la function isDate ("a is Date")
    }
}

compteur?.addEventListener('click', increment)