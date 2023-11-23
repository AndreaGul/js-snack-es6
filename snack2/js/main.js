// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo un array squadre e al suo interno avro' degli oggetti con proprieta' nome, punti fatti, falli subiti

const squadre = [
  {
    nome: 'squadra1',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: 'squadra2',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: 'squadra3',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: 'squadra4',
    'punti fatti': 0,
    'falli subiti': 0,
  },
];

// Creo una funzione che calcola un numero random grazie a math floor e math random e restituisca un numero compreso tra 0 e 49

function numRandom() {
  const num = Math.floor(Math.random() * 50);
  return num;
}

// Per modificare il valore nelle key degli oggetti posso usare un foreach per attaversare tutto l'array e assegnare alle proprieta Punti fatti e falli subiti un numero random

squadre.forEach((element) => {
  element['punti fatti'] = numRandom();
  element['falli subiti'] = numRandom();
});
console.log(
  'Array di oggetti con con numeri di punti fatti e falli subiti',
  squadre
);
// Destruttuarndo l'array di oggetti e prendendoci solo nomi e falli subiti possiamo usare map ritornare solo quelle due proprieta'.
// (il map mi ritorna una array undefined della stessa lunghezza del primo, l'elemento dell'array map rapresenta ogni singolo oggetto nell'array io dovrei destrutturare l'elemento e ritoranre le due proprieta' che mi servono )

const infoSquadre = squadre.map((elemento) => {
  const { nome, 'falli subiti': falli } = elemento;

  return { nome, falli };
});

console.log('Array di oggetti con nomi e falli', infoSquadre);
// E il nuovo array creato lo stampiamo in console.
