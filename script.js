const canciones = [
  "Let It Be", "Bohemian Rhapsody", "Despacito",
  "Shape of You", "Bad Guy", "Blinding Lights",
  "La Bicicleta", "Tusa", "Vivir Mi Vida"
];

function crearBingo() {
  const bingo = document.getElementById('bingo');
  canciones.forEach(nombre => {
    const celda = document.createElement('div');
    celda.classList.add('cell');
    celda.textContent = nombre;
    celda.onclick = () => celda.classList.toggle('tachado');
    bingo.appendChild(celda);
  });
}

crearBingo();
