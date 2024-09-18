// script.js

// Lista aggiornata dei trailer con i rispettivi generi (50 film)
const allVideos = [
    // Film d'Azione
    { id: '6ZfuNTqbHE8', title: 'Avengers: Infinity War', genres: ['Azione', 'Fantascienza'] },
    { id: 'TcMBFSGVi1c', title: 'Avengers: Endgame', genres: ['Azione', 'Fantascienza'] },
    { id: 'EXeTwQWrcwY', title: 'Il Cavaliere Oscuro', genres: ['Azione', 'Crime'] },
    { id: 'hEJnMQG9ev8', title: 'Mad Max: Fury Road', genres: ['Azione', 'Avventura'] },
    { id: 'wb49-oV0F78', title: 'Mission: Impossible - Fallout', genres: ['Azione', 'Thriller'] },
    { id: '2AUmvWm5ZDQ', title: 'John Wick', genres: ['Azione', 'Thriller'] },
    { id: 'vKQi3bBA1y8', title: 'The Matrix', genres: ['Azione', 'Fantascienza'] },
    { id: 'owK1qxDselE', title: 'Gladiator', genres: ['Azione', 'Dramma'] },
    { id: '2TQ-pOvI6Xo', title: 'Die Hard', genres: ['Azione', 'Thriller'] },
    { id: 'Ify9S7hj480', title: 'The Gentlemen', genres: ['Crime', 'Azione'] },
    // Film Drammatici
    { id: '5xH0HfJHsaY', title: 'Parasite', genres: ['Dramma', 'Thriller'] },
    { id: '6hB3S9bIaco', title: 'Le ali della libertà', genres: ['Dramma'] },
    { id: 'bLvqoHBptjg', title: 'Forrest Gump', genres: ['Dramma', 'Romantico'] },
    { id: 'YoHD9XEInc0', title: 'Inception', genres: ['Dramma', 'Fantascienza'] },
    { id: 'gG22XNhtnoY', title: "Schindler's List", genres: ['Dramma', 'Storico'] },
    { id: 'sY1S34973zA', title: 'The Wolf of Wall Street', genres: ['Commedia', 'Dramma'] },
    { id: 'YqNYrYUiMfg', title: '1917', genres: ['Guerra', 'Dramma'] },
    { id: 'zyYgDtY2AMY', title: 'Le Mans \'66 - La grande sfida', genres: ['Dramma', 'Azione'] },
    { id: 'Rw8nldFzpiQ', title: 'Prisoners', genres: ['Thriller', 'Crime'] },
    { id: 'gCcx85zbxz4', title: 'Blade Runner 2049', genres: ['Fantascienza', 'Thriller'] },
    // Film Commedia
    { id: 'tcdUhdOlz9M', title: 'Una notte da leoni', genres: ['Commedia'] },
    { id: '4qQyUi4zfDs', title: 'Superbad', genres: ['Commedia'] },
    { id: 'EwbE5m8nZAY', title: 'Crazy, Stupid, Love', genres: ['Commedia', 'Romantico'] },
    { id: 'ELeMaP8EPAA', title: 'C\'era una volta a... Hollywood', genres: ['Dramma', 'Commedia'] },
    { id: 'xi-1NchUqMA', title: 'Knives Out', genres: ['Mistero', 'Commedia'] },
    { id: 'tL4McUzXfFI', title: 'Jojo Rabbit', genres: ['Commedia', 'Dramma'] },
    { id: '1Fg5iWmQjwk', title: 'Grand Budapest Hotel', genres: ['Commedia', 'Avventura'] },
    { id: 'jc86EFjLFV4', title: 'The Big Sick', genres: ['Commedia', 'Romantico'] },
    { id: '8m9EVP8X7N8', title: 'Zombieland', genres: ['Commedia', 'Horror'] },
    { id: 'ANjenc4W1_Q', title: 'Step Brothers', genres: ['Commedia'] },
    // Film Horror
    { id: 'zqUopiAYdRg', title: 'The Conjuring - L\'Evocazione', genres: ['Horror', 'Mistero'] },
    { id: 'X0DBud_sNNU', title: 'A Quiet Place - Un posto tranquillo', genres: ['Horror', 'Thriller'] },
    { id: 'V6wWKNij_1M', title: 'Hereditary - Le radici del male', genres: ['Horror', 'Dramma'] },
    { id: 'DzfpyUB60YY', title: 'Get Out', genres: ['Horror', 'Thriller'] },
    { id: 'h9Q4zZS2v1k', title: 'The Ring', genres: ['Horror', 'Mistero'] },
    { id: '1VXugyR-wYU', title: 'Midsommar - Il villaggio dei dannati', genres: ['Horror'] },
    { id: 'hAUTdjf9rko', title: 'Us', genres: ['Horror', 'Thriller'] },
    { id: 'LQF0pe_7cB4', title: 'Nightmare - Dal profondo della notte', genres: ['Horror', 'Thriller'] },
    { id: 'ek1ePFp-nBI', title: 'Halloween', genres: ['Horror', 'Thriller'] },
    { id: 'xKJmEC5ieOk', title: 'IT Capitolo Due', genres: ['Horror', 'Thriller'] },
    // Film di Fantascienza
    { id: 'zSWdZVtXT7E', title: 'Interstellar', genres: ['Fantascienza', 'Avventura'] },
    { id: 'qYAETtIIClk', title: 'E.T. l\'extra-terrestre', genres: ['Fantascienza', 'Famiglia'] },
    { id: 'LjLamj-b0I8', title: 'Alien', genres: ['Fantascienza', 'Horror'] },
    { id: 'qvsgGtivCgs', title: 'Ritorno al futuro', genres: ['Fantascienza', 'Avventura'] },
    { id: 'YoHD9XEInc0', title: 'Inception', genres: ['Fantascienza', 'Thriller'] },
    { id: 'eOrNdBpGMv8', title: 'The Avengers', genres: ['Fantascienza', 'Azione'] },
    { id: 'wE4JCy773AU', title: 'Minority Report', genres: ['Fantascienza', 'Thriller'] },
    { id: 'vw61gCe2oqI', title: 'Edge of Tomorrow - Senza domani', genres: ['Fantascienza', 'Azione'] },
    { id: 'OiTiKOy59o4', title: 'Gravity', genres: ['Fantascienza', 'Thriller'] },
    { id: 'EoQuVnKhxaM', title: 'Ex Machina', genres: ['Fantascienza', 'Thriller'] },
    // Film d'Animazione
    { id: 'Ga6RYejo6Hk', title: 'Coco', genres: ['Animazione', 'Famiglia'] },
    { id: 'LKFuXETZUsI', title: 'Oceania', genres: ['Animazione', 'Avventura'] },
    { id: 'wmiIUN-7qhE', title: 'Toy Story 4', genres: ['Animazione', 'Avventura'] },
    { id: 'seMwpP0yeu4', title: 'Inside Out', genres: ['Animazione', 'Famiglia'] },
    { id: 'pkqzFUhGPJg', title: 'Up', genres: ['Animazione', 'Avventura'] },
    { id: 'xB5ceAruYrI', title: 'Monsters & Co.', genres: ['Animazione', 'Famiglia'] },
    { id: '2zLkasScy7A', title: 'Alla ricerca di Nemo', genres: ['Animazione', 'Famiglia'] },
    { id: 'eZbzbC9285I', title: 'Gli Incredibili', genres: ['Animazione', 'Azione'] },
    { id: 'CwXOrWvPBPk', title: 'Shrek', genres: ['Animazione', 'Commedia'] },
    { id: 'c3sBBRxDAqk', title: 'Ratatouille', genres: ['Animazione', 'Commedia'] },
    // Film Romantici
    { id: '0pdqf4P9MB8', title: 'La La Land', genres: ['Romantico', 'Musical'] },
    { id: 'FC6biTjEyZw', title: 'Le pagine della nostra vita', genres: ['Romantico', 'Dramma'] },
    { id: 'uTrCxOE7Xzc', title: 'Notting Hill', genres: ['Romantico', 'Commedia'] },
    { id: 'kVrqfYjkTdQ', title: 'Titanic', genres: ['Romantico', 'Dramma'] },
    { id: 'BkL9l7qovsE', title: 'Casablanca', genres: ['Romantico', 'Dramma'] },
    { id: '1dYv5u6v55Y', title: 'Orgoglio e pregiudizio', genres: ['Romantico', 'Dramma'] },
    { id: '9ItBvH5J6ss', title: 'Colpa delle stelle', genres: ['Romantico', 'Dramma'] },
    { id: 'PsD0NpFSADM', title: '500 giorni insieme', genres: ['Romantico', 'Commedia'] },
    { id: 'nSbzyEJ8X9E', title: 'A Star is Born', genres: ['Romantico', 'Dramma'] },
    { id: 'Wzii8IuL8lk', title: 'Pretty Woman', genres: ['Romantico', 'Commedia'] },
    // Film Thriller
    { id: '5iaYLCiq5RM', title: 'Shutter Island', genres: ['Thriller', 'Mistero'] },
    { id: 'Ym3LB0lOJ0o', title: 'L\'amore bugiardo - Gone Girl', genres: ['Thriller', 'Mistero'] },
    { id: 'znmZoVkCjpI', title: 'Seven', genres: ['Thriller', 'Crime'] },
    { id: 'lQKs169Sl0I', title: 'Il silenzio degli innocenti', genres: ['Thriller', 'Crime'] },
    { id: '0vS0E9bBSL0', title: 'Memento', genres: ['Thriller', 'Mistero'] },
    { id: 'SUXWAEX2jlg', title: 'Fight Club', genres: ['Thriller', 'Dramma'] },
    { id: '5jaI1XOB-bs', title: 'Il cigno nero', genres: ['Thriller', 'Dramma'] },
    { id: 'ZZv1vki4ou4', title: 'Donnie Darko', genres: ['Thriller', 'Fantascienza'] },
    { id: '81CHHvL7zqY', title: 'American Psycho', genres: ['Thriller', 'Dramma'] },
    { id: 'VG9AGf66tXM', title: 'Il sesto senso', genres: ['Thriller', 'Mistero'] },
];

// Il resto del codice rimane invariato
// ...


// Stato dell'applicazione
let currentIndex = 0;
let seenVideos = [];
let savedForLater = [];
let videoList = []; // Lista dei video corrente in base alla tab e al genere selezionato
let currentGenre = 'Tutti'; // Genere selezionato

// Elementi DOM
const videoContainer = document.getElementById('video-container');
const giaVistoBtn = document.getElementById('gia-visto-btn');
const salvaPerDopoBtn = document.getElementById('salva-per-dopo-btn');
const perTeTab = document.getElementById('per-te');
const salvaPerDopoTab = document.getElementById('salva-per-dopo'); // Modificato
const nextBtn = document.getElementById('next-btn');
const genreSelect = document.getElementById('genre-select');

// Lista dei generi disponibili
const genres = [
    'Tutti',
    'Azione',
    'Fantascienza',
    'Thriller',
    'Horror',
    'Commedia',
    'Mistero',
    'Crime',
    'Dramma',
    'Romantico',
    'Animazione',
    'Avventura',
    'Fantasia',
    'Guerra',
    'Famiglia',
    'Musical',
    'Storico'
];

// Funzione per caricare il video corrente
function loadCurrentVideo() {
    if (videoList.length === 0) {
        videoContainer.innerHTML = '<p>Nessun video disponibile.</p>';
        return;
    }
    videoContainer.innerHTML = ''; // Svuota il contenitore
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoList[currentIndex].id}?controls=1&autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>
        <div class="video-title">${videoList[currentIndex].title}</div>
    `;
    videoContainer.appendChild(videoItem);
}

// Event Listener per il pulsante "Già Visto"
giaVistoBtn.addEventListener('click', () => {
    const currentVideoId = videoList[currentIndex].id;
    if (!seenVideos.includes(currentVideoId)) {
        seenVideos.push(currentVideoId);
    }
    alert('Segnato come già visto!');
});

// Event Listener per il pulsante "Salva per Dopo"
salvaPerDopoBtn.addEventListener('click', () => {
    const currentVideoId = videoList[currentIndex].id;
    if (!savedForLater.includes(currentVideoId)) {
        savedForLater.push(currentVideoId);
    }
    alert('Salvato per dopo!');
});

// Event Listener per il pulsante "Prossimo Video"
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= videoList.length) {
        alert('Hai raggiunto la fine della lista dei video.');
        currentIndex = 0; // Ricomincia dall'inizio
    }
    loadCurrentVideo();
});

// Funzione per filtrare i video in base al genere e alla tab selezionata
function filterVideos() {
    let filteredVideos = allVideos;

    // Filtra per genere
    if (currentGenre !== 'Tutti') {
        filteredVideos = filteredVideos.filter(video => video.genres.includes(currentGenre));
    }

    // Filtra per tab
    if (perTeTab.classList.contains('active')) {
        videoList = filteredVideos.filter(video => !seenVideos.includes(video.id) && !savedForLater.includes(video.id));
    } else if (salvaPerDopoTab.classList.contains('active')) {
        videoList = filteredVideos.filter(video => savedForLater.includes(video.id));
    }

    currentIndex = 0;
    loadCurrentVideo();
}

// Event Listeners per le tab
perTeTab.addEventListener('click', () => {
    perTeTab.classList.add('active');
    salvaPerDopoTab.classList.remove('active');
    filterVideos();
});

salvaPerDopoTab.addEventListener('click', () => {
    perTeTab.classList.remove('active');
    salvaPerDopoTab.classList.add('active');
    filterVideos();
});

// Event Listener per la selezione del genere
genreSelect.addEventListener('change', () => {
    currentGenre = genreSelect.value;
    filterVideos();
});

// Funzione per inizializzare la lista dei generi nel select
function initializeGenres() {
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreSelect.appendChild(option);
    });
}

// Inizializza l'applicazione
function initializeApp() {
    initializeGenres();
    filterVideos();
}

// Avvia l'app
initializeApp();
