import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
// Dom references:
const userInput = document.querySelector('textarea');
const wordCount = document.querySelector('[data-testid="word-count"]'); // 3 años en encontrar el howto de esto :')
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');
const resetButton = document.getElementById("reset-button");

// detectar al usuario y trigerear las funciones:
userInput.addEventListener('keyup', () => {
  const text = userInput.value; // input
  
  wordCount.textContent = `Recuento de palabras: ${analyzer.getWordCount(text)}`;
  characterCount.textContent = `Recuento de caracteres: ${analyzer.getCharacterCount(text)}`;
  characterNoSpacesCount.textContent = `Recuento de caracteres (sin espacios ni puntuación): ${analyzer.getCharacterCountExcludingSpaces(text)}`;
  numberCount.textContent = `Recuento de números: ${analyzer.getNumberCount(text)}`; // se corrige el nombre de la función
  numberSum.textContent = `Suma total de números: ${analyzer.getNumberSum(text)}`; // se corrige el nombre de la función
  wordLengthAverage.textContent = `Longitud media de palabras: ${analyzer.getAverageWordLength(text)}`;
});

// boton de limpiar, no debe sólo limpiar el texto sino también reestablecer el contenido de resultados.
resetButton.addEventListener('click', () => {
  userInput.value = '';
  userInput.focus();
  wordCount.textContent = 'Recuento de palabras: 0';
  characterCount.textContent = 'Recuento de caracteres: 0';
  characterNoSpacesCount.textContent = 'Recuento de caracteres (sin espacios ni puntuación): 0';
  numberCount.textContent = 'Recuento de números: 0';
  numberSum.textContent = 'Suma total de números: 0';
  wordLengthAverage.textContent = 'Longitud media de palabras: 0';
});
// La aplicación usa el selector del DOM querySelector.

// La aplicación usa el selector del DOM getElementById.

//Manejo de eventos del DOM (listeners, propagación, delegación)

// La aplicación registra un Event Listener para escuchar el evento keyup del <textarea> para actualizar las métricas cuando se haga escriba en el cuadro de texto.

// La aplicación registra un Event Listener para escuchar el evento click del <button> que limpia el contenido de la caja de texto.

// Manipulación dinámica del DOM

//La aplicación actualiza el atributo textContent o innerHTML de los <li> que mostrar las métricas del texto.


