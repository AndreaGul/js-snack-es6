// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Ci creaiamo un array bici con al sui interno degli oggetti che avranno le proprieta' nome e peso.

const bici = [
  {
    nome: 'bici1',
    peso: 2,
  },
  {
    nome: 'bici2',
    peso: 1,
  },
  {
    nome: 'bici3',
    peso: 3,
  },
];

const body = document.querySelector('body');

//Definiamo una variabile minPeso
let minPeso;
let biciLeggera;

// utiliziamo un for each per andarci a prendere tutti i valori degli oggetti
bici.forEach((element, idex) => {
  // destrutturando l'array di oggetti ci prendiuamo solo i valori con key peso
  const { peso } = bici[idex];
  // con una condizione verifichiamo qual e' la bici che pesa dimeno

  // minPeso che avra come valore il peso della prima bici

  if (idex === 0) {
    minPeso = peso;
  }
  //e con un altro confronto, andiamo a verificare se il peso della bici a seguire e' piu piccolo della varibile minPeso sostiuiamo il valore di minPeso con quella della bici corrente
  if (peso < minPeso) {
    minPeso = peso;

    //ci andiamo a salvare la posizione dell'array della bici piu' leggera
    biciLeggera = idex;
  }
});

// di andiamo a destrutturare l'array con l'oggetto che ci interessa
const { nome, peso } = bici[biciLeggera];

console.log(bici[biciLeggera]);
// E con il template literal andiamo ad inserire nel dom i pesi delle bici
body.innerHTML = `<div>La bici ${nome} e' la piu' leggera con un peso di ${peso}kg</div>`;
