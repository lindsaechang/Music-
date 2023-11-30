// Obtenemos todas las canciones de la lista de canciones
let songs = Array.from(document.querySelectorAll('#song-list li'));

// Creamos un nuevo objeto de audio
let audio = new Audio();

// Inicializamos el índice de la canción actual
let currentIndex = 0;

// Función para reproducir una canción
function playSong(index) {
    // Obtenemos la canción de la lista de canciones
    let song = songs[index];

    // Establecemos la fuente del objeto de audio a la canción seleccionada
    audio.src = song.dataset.src;

    // Establecemos la imagen de la canción
    document.getElementById('song-image').style.backgroundImage = `url(${song.dataset.img})`;

    // Establecemos el título de la canción
    document.getElementById('song-title').textContent = song.textContent;

    // Actualizamos el índice de la canción actual
    currentIndex = index;

    // Reproducimos la canción
    audio.play();
}

// Evento que se dispara cuando la canción actual termina
audio.addEventListener('ended', () => {
    // Pasamos a la siguiente canción en la lista
    currentIndex = (currentIndex + 1) % songs.length;

    // Reproducimos la siguiente canción
    playSong(currentIndex);
});

// Evento que se dispara cuando se hace clic en el botón de reproducción/pausa
document.getElementById('play').addEventListener('click', () => {
    // Si la canción está en pausa, la reproducimos
    // Si la canción se está reproduciendo, la pausamos
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

// Evento que se dispara cuando se hace clic en el botón de siguiente
document.getElementById('next').addEventListener('click', () => {
    // Pasamos a la siguiente canción en la lista
    currentIndex = (currentIndex + 1) % songs.length;

    // Reproducimos la siguiente canción
    playSong(currentIndex);
});

// Evento que se dispara cuando se hace clic en el botón de anterior
document.getElementById('prev').addEventListener('click', () => {
    // Pasamos a la canción anterior en la lista
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;

    // Reproducimos la canción anterior
    playSong(currentIndex);
});

// Reproducimos la primera canción al cargar la página
playSong(currentIndex);