Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

Ci creaiamo un array bici con al sui interno degli oggetti che avranno le proprieta' nome e peso.

utiliziamo un for each per andarci a prendere tutti i valori degli oggetti

destreutturando l'array di oggetti ci prendiuamo solo i valori con key peso

con una condizione verifichiamo qual e' la bici che pesa dimeno

Definiamo una variabile minPeso che avra come valore il peso della prima bici e con un altro confronto, andiamo a verificare se il peso della bici a seguire e' piu piccolo della varibile minPeso sostiuiamo il valore di minPeso con quella della bici corrente

E con il template literal andiamo ad inserire nel dom i pesi delle bici

Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

Creo un array squadre e al suo interno avro' degli oggetti con proprieta' nome, punti fatti, falli subiti

Creo una funzione che calcola un numero random grazie a math floor e math random e restituisca un numero compreso tra 0 e 49

Per modificare il valore nelle key degli oggetti posso usare un foreach per attaversare tutto l'array e assegnare alle proprieta Punti fatti e falli subiti un numero random

Destruttuarndo l'array di oggetti e prendendoci solo nomi e falli subiti possiamo usare map ritornare solo quelle due proprieta'.
(il map mi ritorna una array undefined della stessa lunghezza del primo, l'elemento dell'array map rapresenta ogni singolo oggetto nell'array io dovrei destrutturare l'elemento e ritoranre le due proprieta' che mi servono )

E il nuovo array creato lo stampiamo in console.

Bonus Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.

Creaiamo una funzione che accetti 3 argomenti un array di numeri , 2 due numeri.

Con un foreach ci giriamo tutto l'array.

E grazie a filter ci creaiamo un nuovo arrai che al suo interno avra' il risultato di queste condizioni.

Se il numero passato dall'array e' maggiore di a e contemporaneamente minore di b allora ritornera' true.
