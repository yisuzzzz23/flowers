// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te vi bailando", time: 14 },
  { text: "Raspando el cemento", time: 17 },
  { text: "De la plaza, de mi barrio", time: 19 },
  { text: "Tus vueltas cautivaban las miradas de unos cuantos", time: 21 },
  { text: "Tal vez yo era uno mas", time: 25 },
  { text: "Pero desee que fueras mia", time: 27 },
  { text: "Mientras escribia que", time: 30 },
  { text: "Quiero besarte en la cama", time: 32 },
  { text: "Desnuda o con ropa y cantarte poesia", time: 33 },
  { text: "De esas que te escribo para vos nomas", time: 35 },
  { text: "Y hacer el amor solo con vos", time: 38 },
  { text: "Mirada penetrante parece medusa", time: 41 },
  { text: "Movimiento de morocha y cara de U.S.A", time: 43 },
  { text: "No vi ni tu blusa por tu cara hermosa", time: 45 },
  { text: "Y se que no es excusa peroo", time: 47 },
  { text: "Esque con vos senti algo", time: 50 },
  { text: "Que no habia sentido", time: 51.5 },
  { text: "En las noches mis sueños son solo contigo", time: 53 },
  { text: "Mi panza dejaste un lindo cosquilleo", time: 55 },
  { text: "Y en mi mente un tema que aun no termino", time: 58 },
  { text: "Solo te seria infiel con la luna", time: 59 },
  { text: "Pero ni si quiera tiene tu estilo", time: 61 },
  { text: "No tiene tu estilo", time: 65 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);