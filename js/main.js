// Snack 1

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const myBikes = [
    {
        nome: "Bianchi",
        peso: 10
    },
    {
        nome: "Cannondale",
        peso: 6
    },
    {
        nome: "Focus",
        peso: 8
    },
];

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let lightest = myBikes[0];

for (let i = 0; i < myBikes.length; i++) {
    if (myBikes[i].peso < lightest.peso) {
        lightest = myBikes[i];
    }
};

console.log(lightest);

const { nome , peso } = lightest;

console.log(nome, peso);

document.getElementById("container").innerHTML = 
`
<ul>
    <li>${lightest.nome}</li>
    <li>${lightest.peso} kg</li>
</ul>
`;


//---------------------------------------------------------------------------//

// Snack 2

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const superLega = [
    {
        nome: "Juventus",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Barcelona",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Real Madrid",
        punti_fatti: 0,
        falli_subiti: 0
    }
]

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.


for (let i = 0; i < superLega.length; i++) {
        superLega[i].falli_subiti = randomNumber(1,20);
        superLega[i].punti_fatti = randomNumber(1,18);
}

console.log(superLega);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const updatedStats = [];

for (let i = 0; i < superLega.length; i++) {
    const {nome, falli_subiti} = superLega[i];
    let shortStats = { nome , falli_subiti};
    updatedStats.push(shortStats);
};

console.log(updatedStats);

// FUNCTIONS

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//---------------------------------------------------------------------------//

// Snack 3

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


let array = [1, 2, 3, 4, 5];

console.log(array);

let a = randomNumber(1, array.length);
let b = randomNumber(a, array.length);   

console.log(a, b);

// const newFunction = (newArray, min, max) => {
//     const tmp = newArray.filter((element, index) => {
//         if (index > min && index < max){
//             return true;
//         }
//         return false;
//     });
//     return tmp;
// }



console.log(newFunction(array, a, b));

// FUNCTIONS

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}