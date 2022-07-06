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
    { id: 1, name: 'Pinco Pallino', profilePicture: '../img/pinco-pallino.jpg', date: '07/06/2022', text: 'Non contare ogni giorno che passa per ciò che raccogli, ma contalo per ciò che semini.', image: 'https://unsplash.it/300/300?image=115', likes: 75 },
    { id: 2, name: 'Paperon De Paperoni', profilePicture: '', date: '08/06/2022', text: "L'idealismo è la capacità di vedere le persone come potrebbero essere se non fossero come sono.", image: 'https://unsplash.it/300/300?image=162', likes: 96 },
    { id: 3, name: 'Leonardo Da Vinci', profilePicture: '../img/leonardo-da-vinci.jpg', date: '09/06/2022', text: "Può essere artista solo colui che ha una intuizione dell'infinito.", image: 'https://unsplash.it/300/300?image=91', likes: 142 },
    { id: 4, name: 'Hernest Hemingway', profilePicture: '../img/ernest-hemingway.jpg', date: '10/06/2022', text: 'Bisognerebbe imparare dal mare a improvvisare e lasciarsi andare e dal cielo a non avere limiti e confini.', image: 'https://unsplash.it/300/300?image=287', likes: 44 },
]

// funzioni
const renderPosts = (arr) => {

    const createPost = (posts) => {

        const { id, name, profilePicture, date, text, image, likes } = posts;

        const content =
            `<div class="post">
                <div class="post__header">
                     <div class="post-meta">
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${profilePicture}" alt="${name}" />
                         </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${name}</div>
                            <div class="post-meta__time">${date}</div>
                        </div>
                    </div>
                </div>
                <div class="post__text">
                ${text}
                </div>
                <div class="post__image">
                    <img src="${image}" alt="" />
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button js-like-button" href="#${id}" data-postid="${id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone</div>
                    </div>
                </div>
            </div>`;

        return content;
    }

    const postsList = document.querySelector('.posts-list');

    let post = '';
    for (let i = 0; i < feed.length; i++) {
        const posts = feed[i];
        post += createPost(posts);

    }

    postsList.innerHTML = post;

}


// svolgimento
renderPosts(feed);

const likeButtons = document.querySelectorAll('.js-like-button');

for (const likeButton of likeButtons) {

    likeButton.addEventListener('click', function () {

        this.classList.add('like-button--liked');

        const likeCounters = document.querySelectorAll('.js-likes-counter');

        for (const likeCounter of likeCounters) {

            likeCounter.innerText += + 1;
        }
    });
}
