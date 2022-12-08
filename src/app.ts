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
// Permet de donner un typage à compteur

let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span')
    if(span) {
        span.innerText = i.toString();
    }
};

compteur?.addEventListener('click', increment);