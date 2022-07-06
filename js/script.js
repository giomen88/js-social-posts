// # Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// # Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali, inventatele*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*

// #Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// #Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// # ****BONUS**
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
//  2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

// # Consigli del giorno:
//  Ragioniamo tanto sulla definizione dell'oggetto, se sbagliamo quello tutto diventa più difficile!


// creo array

const feed = [
    { name: 'Pinco Pallino', image: 'https://www.litalianovero.it/wp/wp-content/uploads/2019/11/pinco-pallino-730x730.jpg', date: 07 / 06 / 2022, text: 'Non contare ogni giorno che passa per ciò che raccogli, ma contalo per ciò che semini.', image: 'https://unsplash.it/300/300?image=115', likes: 75 },
    { name: 'Paperon De Paperoni', image: 'https://static.wikia.nocookie.net/khwita/images/f/fd/Paperon_de_Paperoni_KH3.png/revision/latest?cb=20190119091646&path-prefix=it', date: 08 / 06 / 2022, text: "L'idealismo è la capacità di vedere le persone come potrebbero essere se non fossero come sono.', image: 'https://unsplash.it/300/300?image=162", likes: 96 },
    { name: 'Leonardo Da Vinci', image: 'http://www.businesspeople.it/var/ezwebin_site/storage/images/people/protagonisti/leonardo-da-vinci-genio-dedito-lavoro-110092/2264702-1-ita-IT/Leonardo-Da-Vinci-genio-dedito-lavoro_slider_home.jpg', date: 09 / 06 / 2022, text: "Può essere artista solo colui che ha una intuizione dell'infinito.", image: 'https://unsplash.it/300/300?image=91', likes: 142 },
    { name: 'Hernest Hemingway', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ernest_Hemingway_Writing_at_Campsite_in_Kenya_-_NARA_-_192655.jpg/800px-Ernest_Hemingway_Writing_at_Campsite_in_Kenya_-_NARA_-_192655.jpg', date: 10 / 06 / 2022, text: 'Bisognerebbe imparare dal mare a improvvisare e lasciarsi andare e dal cielo a non avere limiti e confini.', image: 'https://unsplash.it/300/300?image=287', likes: 44 },
]

